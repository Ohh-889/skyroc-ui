# @skyroc/cli

[![npm](https://img.shields.io/npm/v/@skyroc/cli?color=a1b858&label=)](https://npmjs.com/package/@skyroc/cli)

[English](./README.md) | [简体中文](./README.zh.md)

A powerful CLI tool for git commit, changelog generation, version release, and package management.

## Features

- **Git Commit** - Interactive commit message generator following Conventional Commits
- **Changelog** - Automatic changelog generation from git history
- **Release** - Version bumping with changelog and git tag
- **Cleanup** - Clean up node_modules, dist, and other build artifacts
- **Update Packages** - Update package.json dependencies to latest versions

## Installation

```bash
# npm
npm install -D @skyroc/cli

# pnpm
pnpm add -D @skyroc/cli

# yarn
yarn add -D @skyroc/cli
```

## Usage

### Git Commit

Generate commit messages that follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```bash
sr git-commit
```

Options:
- `-l, --lang <lang>` - Display language (default: `en-us`)
- `-m, --gitEmoji <emoji>` - Enable/disable git commit emoji (default: `true`)

### Changelog Generation

Generate changelog from git history:

```bash
sr changelog
```

Options:
- `-t, --total` - Generate changelog from all tags
- `-tg, --tag <tag>` - Generate changelog for a specific tag

### Version Release

Bump version, generate changelog, and create git tag:

```bash
sr release
```

Options:
- `-e, --execute [command]` - Execute command after bumping (default: `npx soy changelog`)
- `-p, --push` - Push git commit and tag
- `-pn, --packageName <name>` - Package name to bump
- `-pr, --preid <preid>` - Prerelease identifier (e.g., `alpha`, `beta`)
- `-re, --release <type>` - Release type (`conventional`, `npm`, `yarn`, `pnpm`)

### Cleanup

Delete build artifacts and dependencies:

```bash
sr cleanup
```

Options:
- `-c, --cleanupDir <dir>` - Glob pattern of directories to clean (comma-separated)

### Update Dependencies

Update package.json dependencies to latest versions:

```bash
sr update-pkg
```

## Configuration

Create a `skyroc.config.ts` (or `.js`, `.mjs`) file in your project root:

```ts
import { defineConfig } from '@skyroc/cli'

export default defineConfig({
  // Changelog options
  changelogOptions: {
    // Custom changelog configuration
  },

  // Directories to clean up
  cleanupDirs: [
    '**/node_modules',
    '**/dist',
    '**/.turbo'
  ],

  // Git commit types
  gitCommitTypes: [
    { emoji: '✨', name: 'feat', description: 'A new feature' },
    { emoji: '🐛', name: 'fix', description: 'A bug fix' },
    // ... more types
  ],

  // Git commit scopes
  gitCommitScopes: [
    { name: 'ui', description: 'UI components' },
    { name: 'cli', description: 'CLI tool' },
    // ... more scopes
  ],

  // Release options
  releaseOptions: {
    // Custom release configuration
  },

  // NCU command arguments
  ncuCommandArgs: [
    '-u',
    '--deep'
  ]
})
```

## Commands Reference

| Command | Description |
|---------|-------------|
| `sr git-commit` | Interactive git commit message generator |
| `sr git-commit-verify` | Verify commit message format |
| `sr changelog` | Generate changelog |
| `sr release` | Release new version |
| `sr cleanup` | Clean up build artifacts |
| `sr update-pkg` | Update dependencies |

## API

### defineConfig

Helper function for type-safe configuration:

```ts
import { defineConfig } from '@skyroc/cli'

export default defineConfig({
  // Your configuration
})
```

### Types

```ts
import type { 
  CliOption, 
  GitCommitType, 
  GitCommitScope, 
  GitEmojiItem 
} from '@skyroc/cli'
```

## Integration with Git Hooks

Use with `simple-git-hooks` and `lint-staged`:

```json
{
  "simple-git-hooks": {
    "commit-msg": "npx sr git-commit-verify"
  }
}
```

## License

[MIT](../../LICENSE) License © 2024-PRESENT [Ohh](https://github.com/Ohh-889)

