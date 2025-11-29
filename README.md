# Skyroc UI

<div align="center">

![Skyroc UI](https://img.shields.io/badge/Skyroc-UI-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.11-blue.svg)

A modern React UI component library monorepo built with Radix UI and Tailwind CSS.

[English](./README.md) | [简体中文](./README.zh.md)

</div>

## Overview

Skyroc UI is a comprehensive **monorepo** containing a modern React UI component library along with its supporting toolchain. The monorepo structure allows for better development experience, shared configurations, and seamless integration between packages.

### Why a Monorepo?

- **Unified Development** - All packages share the same development environment and tooling
- **Seamless Integration** - Components, plugins, and utilities work together out of the box
- **Consistent Quality** - Shared ESLint, TypeScript, and testing configurations
- **Simplified Maintenance** - Single repository for issues, PRs, and releases
- **Better DX** - Easy cross-package development and testing

## Packages

### Core Packages

| Package | Description | npm |
|---------|-------------|-----|
| [skyroc-ui](./packages/ui) | Core UI component library with 50+ components | [![npm](https://img.shields.io/npm/v/skyroc-ui.svg)](https://npmjs.com/package/skyroc-ui) |
| [@skyroc/tailwind-plugin](./packages/tailwind-plugin) | Tailwind CSS plugin for theming and design tokens | [![npm](https://img.shields.io/npm/v/@skyroc/tailwind-plugin.svg)](https://npmjs.com/package/@skyroc/tailwind-plugin) |
| [@skyroc/color](./packages/color) | Color system utilities for palette generation | [![npm](https://img.shields.io/npm/v/@skyroc/color.svg)](https://npmjs.com/package/@skyroc/color) |

### Primitives

| Package | Description | npm |
|---------|-------------|-----|
| [@skyroc/form](./primitives/filed-form) | Advanced form handling with type-safe field management | [![npm](https://img.shields.io/npm/v/@skyroc/form.svg)](https://npmjs.com/package/@skyroc/form) |
| [@skyroc/utils](./primitives/utils) | Utility functions and helpers | [![npm](https://img.shields.io/npm/v/@skyroc/utils.svg)](https://npmjs.com/package/@skyroc/utils) |
| [@skyroc/type-utils](./primitives/type-utils) | Advanced TypeScript utility types | [![npm](https://img.shields.io/npm/v/@skyroc/type-utils.svg)](https://npmjs.com/package/@skyroc/type-utils) |
| [@skyroc/virtualizer](./primitives/virtualizer) | Headless virtualizer for large lists and grids | [![npm](https://img.shields.io/npm/v/@skyroc/virtualizer.svg)](https://npmjs.com/package/@skyroc/virtualizer) |

### Developer Tools

| Package | Description | npm |
|---------|-------------|-----|
| [@skyroc/cli](./internal/cli) | CLI for git commits, changelog, and releases | [![npm](https://img.shields.io/npm/v/@skyroc/cli.svg)](https://npmjs.com/package/@skyroc/cli) |
| [create-skyroc](./internal/create-skyroc) | Project scaffolding tool | [![npm](https://img.shields.io/npm/v/create-skyroc.svg)](https://npmjs.com/package/create-skyroc) |
| [@skyroc/eslint-config](./packages/eslint-config) | ESLint flat config for React, Vue, Next.js | [![npm](https://img.shields.io/npm/v/@skyroc/eslint-config.svg)](https://npmjs.com/package/@skyroc/eslint-config) |

### Documentation (Internal)

| Package | Description |
|---------|-------------|
| [@skyroc/next-docs-plugin](./packages/next-docs-plugin) | MDX plugin for documentation |
| [@skyroc/next-docs-themes](./packages/next-docs-themes) | Theme components for documentation |

## Development Projects

This monorepo includes two essential development projects for working with and showcasing the component library:

### 🎮 Playground

An interactive component showcase and testing environment built with Next.js. The playground allows you to:

- **Browse all components** - Explore 50+ components with live examples
- **Test interactions** - Try different component states and variants
- **View source code** - See implementation details for each demo
- **Develop new components** - Test components in isolation during development

**Quick start:**
```bash
cd playground
pnpm dev
# Open http://localhost:3000
```

📖 [View Playground README](./playground/README.md)

### 📚 Documentation Site

A comprehensive documentation website built with Next.js and MDX, featuring:

- **Complete API documentation** - Detailed component APIs and props
- **Usage guides** - Step-by-step tutorials and best practices
- **Live code previews** - Interactive examples with editable code
- **Search functionality** - Quick access to any component or guide

**Quick start:**
```bash
cd docs
pnpm dev
# Open http://localhost:3000
```

📖 [View Docs README](./docs/README.md)

## Features

- **Modern Design** - Beautiful and clean design with light/dark theme support
- **50+ Components** - Comprehensive collection of high-quality React components
- **Highly Customizable** - Built with Tailwind CSS, supports theme customization
- **Responsive** - Mobile-first design that works on all devices
- **Accessible** - Built on Radix UI, follows WAI-ARIA standards
- **TypeScript** - Full TypeScript support with excellent DX
- **Powerful Forms** - Built-in form system with validation and state management
- **Tree Shaking** - Optimized bundle size with tree-shaking support
- **SSR Ready** - Perfect support for Next.js and other SSR frameworks

## Quick Start

### Using the Scaffolding Tool

```bash
npx create-skyroc my-app
cd my-app
npm run dev
```

### Manual Installation

```bash
# Install the UI library
npm install skyroc-ui

# Install the Tailwind plugin
npm install @skyroc/tailwind-plugin
```

Configure Tailwind CSS:

```js
// tailwind.config.js
import { skyrocUIPlugin } from '@skyroc/tailwind-plugin'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/skyroc-ui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [skyrocUIPlugin()]
}
```

Use components:

```tsx
import { Button, Card, Input } from 'skyroc-ui'

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome to Skyroc UI</Card.Title>
      </Card.Header>
      <Card.Content className="space-y-4">
        <Input placeholder="Enter text" />
        <Button>Submit</Button>
      </Card.Content>
    </Card>
  )
}
```

## Project Structure

```
skyroc-ui/
├── packages/                 # Published packages
│   ├── ui/                  # Core UI component library
│   ├── tailwind-plugin/     # Tailwind CSS plugin
│   ├── color/               # Color system utilities
│   ├── eslint-config/       # ESLint configuration
│   ├── next-docs-plugin/    # Documentation MDX plugin
│   └── next-docs-themes/    # Documentation themes
├── primitives/              # Low-level primitives
│   ├── filed-form/          # Form handling system
│   ├── utils/               # Utility functions
│   ├── type-utils/          # TypeScript utilities
│   └── virtualizer/         # Virtual scrolling
├── internal/                # Internal tools
│   ├── cli/                 # CLI tool
│   └── create-skyroc/       # Project scaffolding
├── playground/              # Component demos and testing
└── docs/                    # Documentation site
```

## Development

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/Ohh-889/skyroc-ui.git
cd skyroc-ui

# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build

# Run linting
pnpm lint
```

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build all packages |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code |
| `pnpm deploy:playground` | Deploy playground |

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Design inspiration
- [Lucide React](https://lucide.dev/) - Beautiful icons

## Contact

- Author: Ohh
- Email: 1509326266@qq.com
- GitHub: [https://github.com/Ohh-889/skyroc-ui](https://github.com/Ohh-889/skyroc-ui)

---

<div align="center">

If this project helps you, please give it a star!

</div>
