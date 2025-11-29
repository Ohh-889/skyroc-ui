import type { Linter } from 'eslint';
import { FlatConfigComposer } from 'eslint-flat-config-utils';
import { isPackageExists } from 'local-pkg';
import type { Awaitable, FlatConfigItem, SkryocESLintConfig } from './types';
import {
  command,
  comments,
  disables,
  formatter,
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
  yaml
} from './configs';
import { isInEditorEnv } from './utils';

const flatConfigProps = [
  'name',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings'
] satisfies (keyof FlatConfigItem)[];

const VuePackages = ['vue', 'nuxt', 'vitepress'];
const ReactPackages = ['react', 'react-dom'];
const NextPackages = ['next'];

export const defaultPluginRenaming = {
  '@eslint-react': 'react',
  '@eslint-react/dom': 'react-dom',
  '@eslint-react/hooks-extra': 'react-hooks-extra',
  '@eslint-react/naming-convention': 'react-naming-convention',

  '@next/next': 'next',
  '@stylistic': 'style',
  '@typescript-eslint': 'ts',
  'import-lite': 'import',
  'n': 'node',
  'vitest': 'test',

  'yml': 'yaml'
};

/**
 * Construct an array of ESLint flat config items.
 *
 * @param {SkryocESLintConfig & FlatConfigItem} options
 *  The options for generating the ESLint configurations.
 * @param {Awaitable<FlatConfigItem | FlatConfigItem[]>[]} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {FlatConfigComposer<FlatConfigItem>}
 *  The merged ESLint configurations.
 */
export function skyroc(
  options: SkryocESLintConfig & Omit<FlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<FlatConfigItem | FlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<FlatConfigItem> {
  const {
    autoRenamePlugins = true,
    componentExts = [],
    formatter: enableFormatter = true,
    gitignore: enableGitignore = true,
    ignores: userIgnores = [],
    jsonc: enableJSONC = true,
    markdown: enableMarkdown = true,
    next: enableNext = NextPackages.some(i => isPackageExists(i)),
    pnpm: enablePnpm = false,
    react: enableReact = ReactPackages.some(i => isPackageExists(i)),
    reactNative: enableReactNative = false,
    regexp: enableRegExp = true,
    stylistic: enableStylistic = true,
    tailwindcss: enableTailwindCSS = isPackageExists('tailwindcss'),
    test: enableTest = true,
    toml: enableToml = true,
    typescript: enableTypeScript = isPackageExists('typescript'),
    unicorn: enableUnicorn = true,
    unocss: enableUnoCSS = false,
    vue: enableVue = VuePackages.some(i => isPackageExists(i)),
    yaml: enableYaml = true
  } = options;

  let isInEditor = options.isInEditor;

  if (isInEditor == null) {
    isInEditor = isInEditorEnv();
    if (isInEditor)
      // eslint-disable-next-line no-console
      console.log('[@skyroc/eslint-config] Detected running in editor, some rules are disabled.');
  }

  const stylisticOptions = enableStylistic === false
    ? false
    : typeof enableStylistic === 'object'
      ? enableStylistic
      : {};

  const typescriptOptions = resolveSubOptions(options, 'typescript');
  const tsconfigPath = 'tsconfigPath' in typescriptOptions ? typescriptOptions.tsconfigPath : undefined;

  const configs: Awaitable<FlatConfigItem[]>[] = [];

  // Gitignore
  if (enableGitignore) {
    configs.push(gitignore());
  }

  // Base configs
  configs.push(
    ignores(userIgnores),
    javascript({
      isInEditor,
      overrides: getOverrides(options, 'javascript')
    }),
    comments(),
    node(),
    jsdoc({
      stylistic: !!stylisticOptions
    }),
    imports(getOverrides(options, 'imports')),
    command(),

    // Optional plugins (installed but not enabled by default)
    perfectionist()
  );

  if (enableUnicorn) {
    configs.push(unicorn(enableUnicorn === true ? {} : enableUnicorn));
  }

  if (enableVue) {
    componentExts.push('vue');
  }

  if (enableTypeScript) {
    configs.push(typescript({
      ...typescriptOptions,
      componentExts,
      overrides: getOverrides(options, 'typescript')
    }));
  }

  if (stylisticOptions) {
    configs.push(stylistic({
      ...stylisticOptions,
      overrides: getOverrides(options, 'stylistic')
    }));
  }

  if (enableRegExp) {
    configs.push(regexp(typeof enableRegExp === 'boolean' ? {} : enableRegExp));
  }

  if (enableTest) {
    configs.push(test({
      isInEditor,
      overrides: getOverrides(options, 'test')
    }));
  }

  if (enableVue && !enableReact && !enableNext) {
    configs.push(vue({
      ...resolveSubOptions(options, 'vue'),
      overrides: getOverrides(options, 'vue'),
      stylistic: stylisticOptions,
      typescript: !!enableTypeScript
    }));
  }

  if (enableReact && !enableVue) {
    configs.push(react({
      ...typescriptOptions,
      overrides: getOverrides(options, 'react'),
      tsconfigPath
    }));
  }

  if (enableReactNative && enableReact && !enableVue) {
    configs.push(reactNative({
      overrides: getOverrides(options, 'reactNative')
    }));
  }

  if (enableNext && enableReact && !enableVue) {
    configs.push(next({
      overrides: getOverrides(options, 'next')
    }));
  }

  if (enableUnoCSS) {
    configs.push(unocss({
      ...resolveSubOptions(options, 'unocss'),
      overrides: getOverrides(options, 'unocss')
    }));
  }

  if (enableTailwindCSS) {
    configs.push(tailwindcss({
      ...resolveSubOptions(options, 'tailwindcss'),
      overrides: getOverrides(options, 'tailwindcss')
    }));
  }

  if (enableJSONC) {
    configs.push(
      jsonc({
        overrides: getOverrides(options, 'jsonc'),
        stylistic: stylisticOptions
      }),
      sortPackageJson(),
      sortTsconfig()
    );
  }

  if (enablePnpm) {
    configs.push(pnpm());
  }

  if (enableYaml) {
    configs.push(yaml({
      overrides: getOverrides(options, 'yaml'),
      stylistic: stylisticOptions
    }));
  }

  if (enableToml) {
    configs.push(toml({
      overrides: getOverrides(options, 'toml'),
      stylistic: stylisticOptions
    }));
  }

  if (enableMarkdown) {
    configs.push(
      markdown({
        componentExts,
        overrides: getOverrides(options, 'markdown')
      })
    );
  }

  if (enableFormatter) {
    configs.push(formatter(
      enableFormatter === true ? {} : enableFormatter,
      typeof stylisticOptions === 'boolean' ? {} : stylisticOptions
    ));
  }

  configs.push(disables());

  if ('files' in options) {
    throw new Error('[@skyroc/eslint-config] The first argument should not contain the "files" property as the options are supposed to be global. Place it in the second or later config instead.');
  }

  // User can optionally pass a flat config item to the first argument
  // We pick the known keys as ESLint would do schema validation
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options)
      acc[key] = options[key] as any;
    return acc;
  }, {} as FlatConfigItem);
  if (Object.keys(fusedConfig).length)
    configs.push([fusedConfig]);

  let composer = new FlatConfigComposer<FlatConfigItem>();

  composer = composer.append(
    ...configs,
    ...userConfigs as any
  );

  if (autoRenamePlugins) {
    composer = composer.renamePlugins(defaultPluginRenaming);
  }

  return composer;
}

export type ResolvedOptions<T> = T extends boolean
  ? never
  : NonNullable<T>;

export function resolveSubOptions<K extends keyof SkryocESLintConfig>(
  options: SkryocESLintConfig,
  key: K
): ResolvedOptions<SkryocESLintConfig[K]> {
  return typeof options[key] === 'boolean'
    ? {} as any
    : options[key] || {} as any;
}

export function getOverrides(
  options: SkryocESLintConfig,
  key: string
): Linter.RulesRecord {
  const sub = resolveSubOptions(options, key as keyof SkryocESLintConfig);
  return {
    ...(options.overrides as any)?.[key],
    ...'overrides' in sub
      ? sub.overrides
      : {}
  } as Linter.RulesRecord;
}
