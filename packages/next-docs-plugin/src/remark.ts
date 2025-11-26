// Rehype plugin for processing code meta attributes
import type { Root } from 'hast';
import { visit } from 'unist-util-visit';

// Utility function: convert filename to PascalCase component name
export function pascal(str: string) {
  const parts = str?.split(/[.\-\s_]/).map(x => x.toLowerCase()) ?? [];
  if (parts.length === 0)
    return '';
  return parts.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function parseMeta(meta?: string) {
  const res: { attrs: Record<string, string | boolean>; highlight: string } = { attrs: {}, highlight: '' };
  if (!meta)
    return res;
  const m = meta.match(/\{([^}]+)\}/);
  if (m)
    res.highlight = m[1];
  const kv = meta.replace(/\{[^}]+\}/, '').trim();
  const re = /([\w-]+)(?:=(?:"([^"]+)"|(\S+)))?/g;
  let match = re.exec(kv);
  while (match !== null) {
    const [, key, qv, uv] = match;
    res.attrs[key] = qv ?? uv ?? true;
    match = re.exec(kv);
  }
  return res;
}

/**
 * rehypeCodeMeta
 * Automatically processes <Demo src="..."> and injects imports during remark stage
 * and processes <code> tag meta attributes during rehype stage
 */
export default function rehypeCodeMeta() {
  return (tree: Root) => {
    // Rehype stage: process <code> element meta attributes
    visit(tree, 'element', (node: any, _index, parent: any) => {
      if (node.tagName !== 'code')
        return;

      const meta = node.data?.meta;

      if (!meta)
        return;

      const parsed = parseMeta(meta);

      // Flatten and convert to data-* attributes
      const dataAttrs = Object.fromEntries(
        Object.entries(parsed.attrs).map(([k, v]) => [`data-${k}`, v === true ? '' : v])
      );

      parent.properties = {
        ...node.properties,
        ...dataAttrs,
        ...(parsed.highlight ? { 'data-highlight': parsed.highlight } : {})
      };

      node.properties = {
        ...node.properties,
        ...dataAttrs
      };
    });
  };
}
