import path from 'node:path';
import type { Root, RootContent } from 'mdast';
import { visit } from 'unist-util-visit';

// Utility function to convert strings to PascalCase
export function pascal(str: string) {
  const parts = str?.split(/[.\-\s_]/).map(x => x.toLowerCase()) ?? [];
  if (parts.length === 0)
    return '';
  return parts.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

/**
 * MDX Plugin: Auto-process <Demo> components
 *
 * Features:
 * 1. Scan all <Demo src="..." /> tags in MDX files
 * 2. Auto-generate import statements for each Demo
 * 3. Inject imported components as children into Demo components
 *
 * Example transformation:
 * Input: <Demo src="@/demos/button-basic.tsx" title="Basic Button" />
 * Output:
 *   import ButtonBasic from '@/demos/button-basic.tsx';
 *   <Demo src="@/demos/button-basic.tsx" title="Basic Button">
 *     <ButtonBasic />
 *   </Demo>
 */
export default function rehypeCodeMeta() {
  return (tree: Root) => {
    // Collect information for all components to be imported
    const demoComponents = new Set<string>(); // Set of used component names (ensure uniqueness)
    const importMap = new Map<string, string>(); // componentName -> {src, namedExport} mapping (for AST generation)

    // Step 1: Traverse all <Demo> tags, collect info and transform nodes
    visit(tree, 'mdxJsxFlowElement', (node: any, index, parent) => {
      if (node.name !== 'Demo')
        return;

      const srcAttr = node.attributes?.find((attr: any) => attr.name === 'src');
      if (!srcAttr)
        return;

      // Ensure we get a string value (srcAttr.value could be an object or string)
      const srcValue = typeof srcAttr.value === 'string' ? srcAttr.value : String(srcAttr.value);

      // Handle child component references, e.g.: @playground/button/modules/ButtonGroupDemo:ButtonGroupHorizontal
      let src = srcValue;
      let namedExport: string | undefined;

      if (srcValue.includes(':')) {
        const colonIndex = srcValue.indexOf(':');
        src = srcValue.substring(0, colonIndex);
        namedExport = srcValue.substring(colonIndex + 1);
      }

      // Add .tsx extension if no extension present
      if (!path.extname(src)) {
        src = `${src}.tsx`;
      }

      // Generate component name from file path (e.g.: button-basic.tsx -> ButtonBasic)
      // If named export, use export name directly; otherwise generate from filename
      const basename = path.basename(src, path.extname(src));
      let componentName = namedExport || pascal(basename);

      // Handle name collisions: if component name exists, add numeric suffix
      // e.g.: ButtonBasic -> ButtonBasic1 -> ButtonBasic2
      let counter = 1;
      const originalName = componentName;
      while (demoComponents.has(componentName)) {
        componentName = `${originalName}${counter}`;
        counter++;
      }
      demoComponents.add(componentName);

      // Store mapping of component name, path, and export type
      importMap.set(componentName, JSON.stringify({ src, namedExport }));

      // Keep all attributes except src (e.g. title, highlight, etc.)
      const otherAttrs = node.attributes?.filter((attr: any) => attr.name !== 'src') || [];

      // Transform node: convert <Demo src="..." /> to <Demo src="..."><Component /></Demo>
      // This way Demo component can receive the actual component instance via children
      parent.children[index!] = {
        attributes: [{ name: 'src', type: 'mdxJsxAttribute', value: src }, ...otherAttrs],
        children: [
          {
            attributes: [],
            children: [],
            data: { _mdxExplicitJsx: true },
            name: componentName,
            type: 'mdxJsxFlowElement'
          }
        ],
        data: { _mdxExplicitJsx: true },
        name: 'Demo',
        type: 'mdxJsxFlowElement'
      };
    });

    // Step 2: Insert all import declarations at the beginning of the document
    if (importMap.size > 0) {
      // Generate ESTree ImportDeclaration AST nodes for each Demo component
      // ESTree is the standard format for JavaScript AST
      const imports = [];

      // Group by src, merge named exports from the same file
      // e.g.: import { A, B } from 'path' instead of two separate import { A } and import { B }
      const groupedBySrc = new Map<string, { defaultExports: string[]; namedExports: Array<{ imported: string; local: string }> }>();

      for (const [componentName, importInfo] of importMap) {
        const { src, namedExport } = JSON.parse(importInfo);

        if (!groupedBySrc.has(src)) {
          groupedBySrc.set(src, { defaultExports: [], namedExports: [] });
        }

        const group = groupedBySrc.get(src)!;

        if (namedExport) {
          group.namedExports.push({ imported: namedExport, local: componentName });
        }
        else {
          group.defaultExports.push(componentName);
        }
      }

      // Generate import statements
      for (const [src, { defaultExports, namedExports }] of groupedBySrc) {
        const specifiers = [];

        // Add default export (each file can only have one default export)
        if (defaultExports.length > 0) {
          specifiers.push({
            local: { name: defaultExports[0], type: 'Identifier' },
            type: 'ImportDefaultSpecifier'
          });
        }

        // Add named exports (can have multiple)
        for (const { imported, local } of namedExports) {
          specifiers.push({
            imported: { name: imported, type: 'Identifier' },
            local: { name: local, type: 'Identifier' },
            type: 'ImportSpecifier'
          });
        }

        // Generate import declaration
        // e.g.: import ButtonColor, { A, B } from '@playground/button/modules/ButtonIconDemo';
        imports.push({
          source: {
            raw: `'${src}'`,
            type: 'Literal',
            value: src
          },
          specifiers,
          type: 'ImportDeclaration'
        });
      }

      // Generate import statements in string form (for the value field)
      const importStrings: string[] = [];
      for (const [src, { defaultExports, namedExports }] of groupedBySrc) {
        const parts: string[] = [];

        if (defaultExports.length > 0) {
          parts.push(defaultExports[0]);
        }

        if (namedExports.length > 0) {
          const named = namedExports.map(n => n.imported === n.local ? n.imported : `${n.imported} as ${n.local}`).join(', ');
          parts.push(`{ ${named} }`);
        }

        importStrings.push(`import ${parts.join(', ')} from '${src}';`);
      }

      // Create MDX ESM import node
      // MDX uses mdxjsEsm node type to represent ESM import/export statements
      const importNode: RootContent = {
        data: {
          estree: {
            body: imports, // All import declarations
            type: 'Program'
          }
        },
        type: 'mdxjsEsm',
        value: importStrings.join('\n') // String form of import statements
      } as any;

      // Insert import node at the beginning of the AST tree
      // This way all imports will be at the start of the generated code
      tree.children.unshift(importNode);
    }
  };
}
