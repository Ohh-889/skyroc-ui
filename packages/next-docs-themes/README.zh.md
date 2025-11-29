# @skyroc/next-docs-themes

[English](./README.md) | [简体中文](./README.zh.md)

用于 Skyroc 文档站点的主题组件，基于 Next.js 和 MDX 构建。提供预设样式的组件，用于渲染带有代码预览、语法高亮和交互式演示的文档。

## 特性

- **代码预览** - 带语法高亮的实时代码预览
- **演示组件** - 交互式组件演示
- **MDX 组件** - 预设样式的标题、表格、列表和提示框
- **复制按钮** - 一键复制代码
- **安装依赖** - 包管理器命令展示
- **TypeScript 支持** - 完整的类型定义

## 安装

```bash
# npm
npm install @skyroc/next-docs-themes

# pnpm
pnpm add @skyroc/next-docs-themes

# yarn
yarn add @skyroc/next-docs-themes
```

## 组件

### 代码预览

#### Demo

展示带源代码的实时组件演示：

```tsx
import { Demo } from '@skyroc/next-docs-themes'

<Demo src="@/demos/button-basic.tsx" title="基础按钮">
  <ButtonBasic />
</Demo>
```

#### LiveCodePreview

实时代码编辑器带预览：

```tsx
import { LiveCodePreview } from '@skyroc/next-docs-themes'

<LiveCodePreview code={sourceCode} title="交互式示例">
  {children}
</LiveCodePreview>
```

#### DemoComponentsProvider

演示组件导入的上下文提供者：

```tsx
import { DemoComponentsProvider } from '@skyroc/next-docs-themes'

<DemoComponentsProvider components={componentMap}>
  {children}
</DemoComponentsProvider>
```

### 代码展示

#### Code

语法高亮的代码块：

```tsx
import { Code } from '@skyroc/next-docs-themes'

<Code language="tsx">
  {`const greeting = "Hello, World!"`}
</Code>
```

#### Pre

预格式化代码，支持自动换行切换：

```tsx
import { Pre, ToggleWordWrapButton } from '@skyroc/next-docs-themes'

<Pre>
  <code>{codeContent}</code>
  <ToggleWordWrapButton />
</Pre>
```

#### CopyButton

复制代码到剪贴板的按钮：

```tsx
import { CopyButton } from '@skyroc/next-docs-themes'

<CopyButton text={codeToCopy} />
```

### MDX 组件

#### 标题

```tsx
import { H1, H2, H3, H4, H5, H6 } from '@skyroc/next-docs-themes'

<H1>主标题</H1>
<H2>章节标题</H2>
<H3>小节标题</H3>
```

#### 表格

```tsx
import { Table, THead, TBody, TR, TH, TD } from '@skyroc/next-docs-themes'

<Table>
  <THead>
    <TR>
      <TH>名称</TH>
      <TH>类型</TH>
    </TR>
  </THead>
  <TBody>
    <TR>
      <TD>variant</TD>
      <TD>string</TD>
    </TR>
  </TBody>
</Table>
```

#### 列表

```tsx
import { UL, OL, LI } from '@skyroc/next-docs-themes'

<UL>
  <LI>项目一</LI>
  <LI>项目二</LI>
</UL>

<OL>
  <LI>第一步</LI>
  <LI>第二步</LI>
</OL>
```

#### Callout

高亮信息提示框：

```tsx
import { Callout } from '@skyroc/next-docs-themes'

<Callout type="info">
  这是一条信息提示。
</Callout>

<Callout type="warning">
  这是一条警告信息。
</Callout>
```

### 工具组件

#### InstallDependencies

展示包安装命令：

```tsx
import { InstallDependencies } from '@skyroc/next-docs-themes'

<InstallDependencies package="skyroc-ui" />
```

#### FeatureCard / FeatureGrid

特性展示组件：

```tsx
import { FeatureCard, FeatureGrid } from '@skyroc/next-docs-themes'

<FeatureGrid>
  <FeatureCard title="快速" icon={<ZapIcon />}>
    闪电般的性能
  </FeatureCard>
  <FeatureCard title="无障碍" icon={<AccessibilityIcon />}>
    符合 WAI-ARIA 标准
  </FeatureCard>
</FeatureGrid>
```

#### TypeList

展示 TypeScript 类型定义：

```tsx
import { TypeList, parseTypeString } from '@skyroc/next-docs-themes'

<TypeList types={parseTypeString("'primary' | 'secondary' | 'ghost'")} />
```

#### VariantShowcase

展示组件变体：

```tsx
import { VariantShowcase } from '@skyroc/next-docs-themes'

<VariantShowcase
  component={Button}
  variants={['primary', 'secondary', 'outline']}
/>
```

#### ComponentPreview

通用组件预览容器：

```tsx
import { ComponentPreview } from '@skyroc/next-docs-themes'

<ComponentPreview>
  <Button>预览</Button>
</ComponentPreview>
```

## MDX 集成

通过组件映射与 MDX 配合使用：

```tsx
// mdx-components.tsx
import {
  H1, H2, H3, H4, H5, H6,
  Table, THead, TBody, TR, TH, TD,
  UL, OL, LI,
  Pre, Code,
  Callout
} from '@skyroc/next-docs-themes'

export function useMDXComponents(components) {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    table: Table,
    thead: THead,
    tbody: TBody,
    tr: TR,
    th: TH,
    td: TD,
    ul: UL,
    ol: OL,
    li: LI,
    pre: Pre,
    code: Code,
    Callout,
    ...components
  }
}
```

## 许可证

[MIT](../../LICENSE) 许可证 © 2024-至今 [Ohh](https://github.com/Ohh-889)

