import type { Awaitable, FlatConfigItem, SkryocESLintConfig } from './types'
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import { isPackageExists } from 'local-pkg'
import {
  command,
  comments,
  disables,
  gitignore,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  next,
  node,
  perfectionist,
  pnpm,
  react,
  reactNative,
  regexp,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  tailwindcss,
  test,
  toml,
  typescript,
  unicorn,
  unocss,
  vue,
  yaml,
} from './configs'

const VuePackages = ['vue', 'nuxt', 'vitepress']
const ReactPackages = ['react', 'react-dom']
const NextPackages = ['next']

export function skyroc(
  options: SkryocESLintConfig = {},
  ...userConfigs: Awaitable<FlatConfigItem | FlatConfigItem[]>[]
): FlatConfigComposer<FlatConfigItem> {
  const {
    gitignore: enableGitignore = true,
    ignores: userIgnores = [],
    jsdoc: enableJSDoc = true,
    jsonc: enableJSONC = true,
    markdown: enableMarkdown = true,
    next: enableNext = NextPackages.some(i => isPackageExists(i)),
    perfectionist: enablePerfectionist = true,
    pnpm: enablePnpm = false,
    react: enableReact = ReactPackages.some(i => isPackageExists(i)),
    reactNative: enableReactNative = false,
    regexp: enableRegExp = true,
    stylistic: enableStylistic = true,
    tailwindcss: enableTailwindCSS = isPackageExists('tailwindcss'),
    test: enableTest = true,
    toml: enableToml = true,
    typescript: enableTypeScript = isPackageExists('typescript'),
    unocss: enableUnoCSS = false,
    vue: enableVue = VuePackages.some(i => isPackageExists(i)),
    yaml: enableYaml = true,
  } = options

  const configs: Awaitable<FlatConfigItem[]>[] = []

  // Gitignore
  if (enableGitignore) {
    configs.push(gitignore())
  }

  // Base configs
  configs.push(ignores(userIgnores), javascript(), node(), imports(), unicorn(), command(), comments())

  // JSDoc
  if (enableJSDoc) {
    configs.push(jsdoc(typeof enableJSDoc === 'boolean' ? {} : enableJSDoc))
  }

  // Perfectionist (sorting)
  if (enablePerfectionist) {
    configs.push(perfectionist())
  }

  // TypeScript
  if (enableTypeScript) {
    configs.push(typescript(typeof enableTypeScript === 'boolean' ? {} : enableTypeScript))
  }

  // Stylistic
  if (enableStylistic) {
    configs.push(stylistic(typeof enableStylistic === 'boolean' ? {} : enableStylistic))
  }

  // RegExp
  if (enableRegExp) {
    configs.push(regexp(typeof enableRegExp === 'boolean' ? {} : enableRegExp))
  }

  // Test
  if (enableTest) {
    configs.push(test(typeof enableTest === 'boolean' ? {} : enableTest))
  }

  // Vue
  if (enableVue && !enableReact && !enableNext) {
    configs.push(
      vue(
        typeof enableVue === 'boolean'
          ? { typescript: Boolean(enableTypeScript) }
          : { typescript: Boolean(enableTypeScript), ...enableVue },
      ),
    )
  }

  // React
  if (enableReact && !enableVue) {
    configs.push(react(typeof enableReact === 'boolean' ? {} : enableReact))
  }

  // React Native
  if (enableReactNative && enableReact && !enableVue) {
    configs.push(reactNative(typeof enableReactNative === 'boolean' ? {} : enableReactNative))
  }

  // Next.js
  if (enableNext && enableReact && !enableVue) {
    configs.push(next(typeof enableNext === 'boolean' ? {} : enableNext))
  }

  // UnoCSS
  if (enableUnoCSS) {
    configs.push(unocss(typeof enableUnoCSS === 'boolean' ? {} : enableUnoCSS))
  }

  // Tailwind CSS
  if (enableTailwindCSS) {
    configs.push(tailwindcss(typeof enableTailwindCSS === 'boolean' ? {} : enableTailwindCSS))
  }

  // JSONC
  if (enableJSONC) {
    configs.push(jsonc(typeof enableJSONC === 'boolean' ? {} : enableJSONC), sortPackageJson(), sortTsconfig())
  }

  // PNPM
  if (enablePnpm) {
    configs.push(pnpm())
  }

  // YAML
  if (enableYaml) {
    configs.push(yaml(typeof enableYaml === 'boolean' ? {} : enableYaml))
  }

  // TOML
  if (enableToml) {
    configs.push(toml(typeof enableToml === 'boolean' ? {} : enableToml))
  }

  // Markdown
  if (enableMarkdown) {
    configs.push(markdown(typeof enableMarkdown === 'boolean' ? {} : enableMarkdown))
  }

  // Disables
  configs.push(disables())

  const composer = new FlatConfigComposer<FlatConfigItem>()

  return composer.append(...configs, ...(userConfigs as any))
}
