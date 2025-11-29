# create-skyroc

[![npm](https://img.shields.io/npm/v/create-skyroc?color=a1b858&label=)](https://npmjs.com/package/create-skyroc)

[English](./README.md) | [简体中文](./README.zh.md)

Skyroc's command-line tool for creating project templates. Quickly scaffold new projects with best practices and configurations pre-configured.

## Features

- **Interactive CLI** - User-friendly prompts to guide project setup
- **Multiple Templates** - Choose from various project templates
- **Auto Install** - Optionally install dependencies automatically
- **Package Manager Detection** - Automatically detects npm/pnpm/yarn
- **TypeScript Ready** - All templates include TypeScript support

## Usage

### With npx (Recommended)

```bash
npx create-skyroc my-project
```

### With pnpm

```bash
pnpm create skyroc my-project
```

### With yarn

```bash
yarn create skyroc my-project
```

## Interactive Mode

Running without arguments starts the interactive CLI:

```bash
npx create-skyroc
```

You'll be prompted to:

1. **Project name** - Name of your project directory
2. **Package name** - Valid npm package name
3. **Template** - Choose from available templates
4. **Install dependencies** - Auto-install with detected package manager
5. **Run dev server** - Start development server immediately

## Command Line Options

```bash
npx create-skyroc [project-name] [options]
```

### Options

| Option | Alias | Description |
|--------|-------|-------------|
| `--template <name>` | `-t` | Use a specific template |
| `--overwrite` | | Overwrite existing directory |
| `--install` | `-i` | Install dependencies automatically |
| `--pm <manager>` | | Specify package manager (npm/pnpm/yarn) |
| `--run-dev` | | Run dev server after install |
| `--help` | `-h` | Display help message |

### Examples

```bash
# Create project with specific template
npx create-skyroc my-app -t ui-primitives

# Create and auto-install dependencies
npx create-skyroc my-app --install

# Create with pnpm and run dev server
npx create-skyroc my-app --pm pnpm --install --run-dev

# Overwrite existing directory
npx create-skyroc my-app --overwrite
```

## Available Templates

| Template | Description |
|----------|-------------|
| `ui-primitives` | UI primitives project with Skyroc setup |

## What's Included

Each template comes pre-configured with:

- **TypeScript** - Full TypeScript support
- **ESLint** - Code linting with @skyroc/eslint-config
- **Tailwind CSS** - Utility-first CSS framework
- **Skyroc UI** - Component library integration
- **Development Scripts** - Ready-to-use npm scripts

## Project Structure

After scaffolding, your project will have:

```
my-project/
├── src/
│   └── ...
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## After Creation

Navigate to your project and start developing:

```bash
cd my-project

# If you didn't auto-install
npm install

# Start dev server
npm run dev
```

## License

[MIT](../../LICENSE) License © 2024-PRESENT [Ohh](https://github.com/Ohh-889)

