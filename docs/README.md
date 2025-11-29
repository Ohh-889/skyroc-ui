# Skyroc UI Documentation Site

[English](./README.md) | [简体中文](./README_ZH.md)

A modern, elegant, and comprehensive documentation website for the Skyroc UI component library.

## ✨ Features

- 🎨 **Beautiful Design** - Visual system based on brand color `hsl(237 100% 70%)`
- 🌙 **Dark Mode** - Perfectly adapted dark theme
- 📱 **Responsive** - Mobile-friendly layout design
- 🔍 **Easy Navigation** - Clear sidebar and navigation structure
- 💻 **Code Preview** - Live component preview and code display
- ⚡ **High Performance** - Built on Next.js 15 App Router

## 🚀 Quick Start

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the documentation site.

### Build for Production

```bash
pnpm build
```

## 📁 Project Structure

```text
docs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (theme provider)
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── docs/                    # Documentation pages
│       ├── layout.tsx           # Docs layout
│       ├── page.mdx             # Introduction
│       ├── installation/        # Installation guide
│       ├── quick-start/         # Quick start guide
│       └── components/          # Component docs
│           ├── button/
│           ├── input/
│           ├── card/
│           └── ...
├── components/                   # React components
│   ├── navbar.tsx               # Top navigation bar
│   ├── sidebar.tsx              # Sidebar documentation navigation
│   ├── component-preview.tsx   # Component preview container
│   ├── theme-provider.tsx      # Theme provider
│   └── heading-anchor.client.tsx # Heading anchor
├── mdx-components.tsx          # MDX component configuration
└── next.config.ts              # Next.js configuration
```

## 🎨 Design System

### Brand Color

```css
--color-brand: hsl(237 100% 70%);
--color-brand-hover: hsl(237 100% 75%);
--color-brand-active: hsl(237 100% 65%);
```

### Fonts

- Body: Inter
- Code: JetBrains Mono / Fira Code / Consolas

### Typography

- H1: 4xl-6xl, bold, gradient color
- H2: 2xl-3xl, semi-bold, with underline and brand color accent
- H3: xl-2xl, semi-bold
- Body: Comfortable line height 1.75

## 📝 Adding New Documentation

### Create MDX Documentation

Create a new `.mdx` file under `app/docs/`:

```mdx
# Component Name

Component description

## Basic Usage

import { Component } from 'skyroc-ui'

export const metadata = {
  title: 'Component Name',
  description: 'Component description'
}
```

### Add Component Preview

Use the `ComponentPreview` component:

```tsx
import { ComponentPreview } from '@/components/component-preview'

<ComponentPreview code={`import { Button } from 'skyroc-ui'

export default function Demo() {
  return <Button>Click me</Button>
}`}>
  <Button>Click me</Button>
</ComponentPreview>
```

### Update Sidebar Navigation

Edit `components/sidebar.tsx` and add a new navigation item:

```ts
const navigation = [
  {
    title: 'Components',
    items: [
      // ... existing items
      { title: 'New Component', href: '/docs/components/new-component' }
    ]
  }
]
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Content**: MDX
- **Code Highlighting**: Shiki + rehype-pretty-code
- **Theme**: next-themes
- **Icons**: Lucide React
- **Types**: TypeScript

## 📦 Dependencies

Main dependencies:

- `@next/mdx` - MDX support
- `@mdx-js/react` - React MDX components
- `next-themes` - Theme switching
- `rehype-pretty-code` - Code highlighting
- `shiki` - Syntax highlighting engine
- `lucide-react` - Icon library

## 🎯 Best Practices

### Heading Hierarchy

- Use only one H1 per page (page title)
- Use H2 for main sections
- Use H3-H6 for subsections

### Code Examples

- Provide complete import statements
- Use TypeScript
- Add necessary comments
- Keep code concise

### Component Preview

- Display on light background
- Provide code and preview toggle
- Ensure responsive display

## 🌐 Deployment

Can be deployed to any platform that supports Next.js:

- Vercel
- Netlify
- Cloudflare Pages
- Self-hosted

```bash
pnpm build
pnpm start
```

## 📄 License

MIT License © 2024-PRESENT [Ohh](https://github.com/Ohh-889)

---

**Skyroc UI** - Elegant, concise, modern React component library

