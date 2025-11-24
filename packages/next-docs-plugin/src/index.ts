import path from 'node:path';
import { visit } from 'unist-util-visit';

export * from './components';

// 保留 pascal 工具
export const pascal = (str) => {
  const parts = str?.split(/[.\-\s_]/).map(x => x.toLowerCase()) ?? [];
  if (parts.length === 0)
    return '';
  return parts.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
};

/**
 * MDX 插件：自动处理 <Demo> 组件
 *
 * 功能：
 * 1. 扫描 MDX 文件中的所有 <Demo src="..." /> 标签
 * 2. 为每个 Demo 自动生成 import 语句
 * 3. 将导入的组件作为 children 注入到 Demo 组件中
 *
 * 示例转换：
 * 输入：<Demo src="@/demos/button-basic.tsx" title="基础按钮" />
 * 输出：
 *   import ButtonBasic from '@/demos/button-basic.tsx';
 *   <Demo src="@/demos/button-basic.tsx" title="基础按钮">
 *     <ButtonBasic />
 *   </Demo>
 */
export default function rehypeCodeMeta() {
  return (tree) => {
    // 用于收集所有需要导入的组件信息
    const demoComponents = new Set<string>(); // 已使用的组件名集合（确保唯一性）
    const importMap = new Map<string, string>(); // componentName -> {src, namedExport} 的映射（用于生成 AST）

    // 第一步：遍历所有 <Demo> 标签，收集信息并转换节点
    visit(tree, 'mdxJsxFlowElement', (node, index, parent) => {
      if (node.name !== 'Demo')
        return;

      const srcAttr = node.attributes?.find(attr => attr.name === 'src');
      if (!srcAttr)
        return;

      // 确保获取字符串值（srcAttr.value 可能是对象或字符串）
      const srcValue = typeof srcAttr.value === 'string' ? srcAttr.value : String(srcAttr.value);

      // 处理子组件引用，例如：@playground/button/modules/ButtonGroupDemo:ButtonGroupHorizontal
      let src = srcValue;
      let namedExport: string | undefined;

      if (srcValue.includes(':')) {
        const colonIndex = srcValue.indexOf(':');
        src = srcValue.substring(0, colonIndex);
        namedExport = srcValue.substring(colonIndex + 1);
      }

      // 从文件路径生成组件名（例：button-basic.tsx -> ButtonBasic）
      // 如果是命名导出，直接使用导出名；否则从文件名生成
      const basename = path.basename(src, path.extname(src));
      let componentName = namedExport || pascal(basename);

      // 处理重名情况：如果组件名已存在，添加数字后缀
      // 例如：ButtonBasic -> ButtonBasic1 -> ButtonBasic2
      let counter = 1;
      const originalName = componentName;
      while (demoComponents.has(componentName)) {
        componentName = `${originalName}${counter}`;
        counter++;
      }
      demoComponents.add(componentName);

      // 存储组件名、路径和导出类型的映射关系
      importMap.set(componentName, JSON.stringify({ src, namedExport }));

      // 保留除 src 之外的其他属性（如 title, highlight 等）
      const otherAttrs = node.attributes?.filter((attr: any) => attr.name !== 'src') || [];

      // 转换节点：将 <Demo src="..." /> 转换为 <Demo src="..."><Component /></Demo>
      // 这样 Demo 组件就能通过 children 接收到实际的组件实例
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

    // 第二步：在文档开头插入所有 import 声明
    if (importMap.size > 0) {
      // 为每个 Demo 组件生成 ESTree ImportDeclaration AST 节点
      // ESTree 是 JavaScript AST 的标准格式
      const imports = [];

      // 按 src 分组，合并同一个文件的命名导出
      // 例如：import { A, B } from 'path' 而不是两个 import { A } 和 import { B }
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

      // 生成 import 语句
      for (const [src, { defaultExports, namedExports }] of groupedBySrc) {
        const specifiers = [];

        // 添加默认导出（每个文件只能有一个默认导出）
        if (defaultExports.length > 0) {
          specifiers.push({
            local: { name: defaultExports[0], type: 'Identifier' },
            type: 'ImportDefaultSpecifier'
          });
        }

        // 添加命名导出（可以有多个）
        for (const { imported, local } of namedExports) {
          specifiers.push({
            imported: { name: imported, type: 'Identifier' },
            local: { name: local, type: 'Identifier' },
            type: 'ImportSpecifier'
          });
        }

        // 生成 import 声明
        // 例如：import ButtonColor, { A, B } from '@playground/button/modules/ButtonIconDemo';
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

      // 生成 import 语句的字符串形式（用于 value 字段）
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

      // 创建 MDX ESM import 节点
      // MDX 使用 mdxjsEsm 节点类型来表示 ESM import/export 语句
      const importNode = {
        data: {
          estree: {
            body: imports, // 所有的 import 声明
            type: 'Program'
          }
        },
        type: 'mdxjsEsm',
        value: importStrings.join('\n') // import 语句的字符串形式
      };

      // 将 import 节点插入到 AST 树的开头
      // 这样生成的代码中，所有 import 都会在文档最开始
      tree.children.unshift(importNode);
    }
  };
}
