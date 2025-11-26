import type { MDXComponents } from 'mdx/types';
import {
  Code,
  ComponentPreview,
  Demo,
  InstallDependencies,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Table,
  THead,
  TBody,
  TR,
  TH,
  TD,
  Pre,
  VariantShowcase,
  UL,
  LI,
  OL,
  FeatureCard,
  FeatureGrid,
  Callout,
  TypeList
} from '@skyroc/next-docs-themes';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: Code,
    ComponentPreview,
    Demo, // 使用增强版 Demo（支持实时预览）
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    InstallDependencies,
    pre: Pre,
    table: Table,
    thead: THead,
    tbody: TBody,
    tr: TR,
    th: TH,
    td: TD,
    ul: UL,
    li: LI,
    ol: OL,
    VariantShowcase,
    FeatureCard,
    FeatureGrid,
    Callout,
    TypeList
  };
}
