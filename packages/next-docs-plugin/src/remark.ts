// packages/next-docs-plugin/rehype-code-meta.ts
import { visit } from 'unist-util-visit';

// 工具函数：文件名转 PascalCase 组件名
export const pascal = (str: string) => {
  const parts = str?.split(/[.\-\s_]/).map(x => x.toLowerCase()) ?? [];
  if (parts.length === 0)
    return '';
  return parts.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
};

function parseMeta(meta?: string) {
  const res = { attrs: {}, highlight: '' };
  if (!meta)
    return res;
  const m = meta.match(/\{([^}]+)\}/);
  if (m)
    res.highlight = m[1];
  const kv = meta.replace(/\{[^}]+\}/, '').trim();
  const re = /([\w-]+)(?:=(?:"([^"]+)"|(\S+)))?/g;
  let t;
  while ((t = re.exec(kv))) {
    const [, key, qv, uv] = t;
    res.attrs[key] = qv ?? uv ?? true;
  }
  return res;
}

/**
 * rehypeCodeMeta
 * 可自动在 remark 阶段处理 <Demo src="..."> 注入 import
 * 并在 rehype 阶段处理 <code> 标签 meta 属性
 */
export default function rehypeCodeMeta() {
  return (tree, vfile) => {
    // ---------------------------------
    // ----------------------------------
    // 3️⃣ rehype 阶段：处理 <code> 元素 meta
    // ----------------------------------
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'code')
        return;

      const meta = node.data?.meta;

      if (!meta)
        return;

      const parsed = parseMeta(meta);

      // 展平并转为 data-* 属性
      const dataAttrs = Object.fromEntries(
        Object.entries(parsed.attrs).map(([k, v]) => [`data-${k}`, v === true ? '' : v])
      );

      console.log('dataAttrs', node);

      parent.properties = {
        ...node.properties,
        ...dataAttrs,
        ...(parsed.highlight ? { 'data-highlight': parsed.highlight } : {})
      };

      node.properties = {
        ...node.properties,
        ...dataAttrs
      };

      console.log('node3343', parent);
    });
  };
}
