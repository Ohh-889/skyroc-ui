# @skyroc/next-docs-themes

[English](./README.md) | [简体中文](./README.zh.md)

Theme components for Skyroc documentation sites built with Next.js and MDX. Provides pre-styled components for rendering documentation with code previews, syntax highlighting, and interactive demos.

## Features

- **Code Preview** - Live code preview with syntax highlighting
- **Demo Components** - Interactive component demonstrations
- **MDX Components** - Pre-styled headings, tables, lists, and callouts
- **Copy Button** - One-click code copying
- **Install Dependencies** - Package manager command display
- **TypeScript Support** - Full type definitions

## Installation

```bash
# npm
npm install @skyroc/next-docs-themes

# pnpm
pnpm add @skyroc/next-docs-themes

# yarn
yarn add @skyroc/next-docs-themes
```

## Components

### Code Preview

#### Demo

Display live component demos with source code:

```tsx
import { Demo } from '@skyroc/next-docs-themes'

<Demo src="@/demos/button-basic.tsx" title="Basic Button">
  <ButtonBasic />
</Demo>
```

#### LiveCodePreview

Real-time code editor with preview:

```tsx
import { LiveCodePreview } from '@skyroc/next-docs-themes'

<LiveCodePreview code={sourceCode} title="Interactive Example">
  {children}
</LiveCodePreview>
```

#### DemoComponentsProvider

Context provider for demo component imports:

```tsx
import { DemoComponentsProvider } from '@skyroc/next-docs-themes'

<DemoComponentsProvider components={componentMap}>
  {children}
</DemoComponentsProvider>
```

### Code Display

#### Code

Syntax-highlighted code block:

```tsx
import { Code } from '@skyroc/next-docs-themes'

<Code language="tsx">
  {`const greeting = "Hello, World!"`}
</Code>
```

#### Pre

Pre-formatted code with word wrap toggle:

```tsx
import { Pre, ToggleWordWrapButton } from '@skyroc/next-docs-themes'

<Pre>
  <code>{codeContent}</code>
  <ToggleWordWrapButton />
</Pre>
```

#### CopyButton

Button to copy code to clipboard:

```tsx
import { CopyButton } from '@skyroc/next-docs-themes'

<CopyButton text={codeToCopy} />
```

### MDX Components

#### Headings

```tsx
import { H1, H2, H3, H4, H5, H6 } from '@skyroc/next-docs-themes'

<H1>Main Title</H1>
<H2>Section Title</H2>
<H3>Subsection</H3>
```

#### Tables

```tsx
import { Table, THead, TBody, TR, TH, TD } from '@skyroc/next-docs-themes'

<Table>
  <THead>
    <TR>
      <TH>Name</TH>
      <TH>Type</TH>
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

#### Lists

```tsx
import { UL, OL, LI } from '@skyroc/next-docs-themes'

<UL>
  <LI>Item one</LI>
  <LI>Item two</LI>
</UL>

<OL>
  <LI>First step</LI>
  <LI>Second step</LI>
</OL>
```

#### Callout

Highlighted information boxes:

```tsx
import { Callout } from '@skyroc/next-docs-themes'

<Callout type="info">
  This is an informational note.
</Callout>

<Callout type="warning">
  This is a warning message.
</Callout>
```

### Utility Components

#### InstallDependencies

Display package installation commands:

```tsx
import { InstallDependencies } from '@skyroc/next-docs-themes'

<InstallDependencies package="skyroc-ui" />
```

#### FeatureCard / FeatureGrid

Feature showcase components:

```tsx
import { FeatureCard, FeatureGrid } from '@skyroc/next-docs-themes'

<FeatureGrid>
  <FeatureCard title="Fast" icon={<ZapIcon />}>
    Lightning-fast performance
  </FeatureCard>
  <FeatureCard title="Accessible" icon={<AccessibilityIcon />}>
    WAI-ARIA compliant
  </FeatureCard>
</FeatureGrid>
```

#### TypeList

Display TypeScript type definitions:

```tsx
import { TypeList, parseTypeString } from '@skyroc/next-docs-themes'

<TypeList types={parseTypeString("'primary' | 'secondary' | 'ghost'")} />
```

#### VariantShowcase

Display component variants:

```tsx
import { VariantShowcase } from '@skyroc/next-docs-themes'

<VariantShowcase
  component={Button}
  variants={['primary', 'secondary', 'outline']}
/>
```

#### ComponentPreview

Generic component preview wrapper:

```tsx
import { ComponentPreview } from '@skyroc/next-docs-themes'

<ComponentPreview>
  <Button>Preview</Button>
</ComponentPreview>
```

## MDX Integration

Use with MDX by mapping components:

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

## License

[MIT](../../LICENSE) License © 2024-PRESENT [Ohh](https://github.com/Ohh-889)

