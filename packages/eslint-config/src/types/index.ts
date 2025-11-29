import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin';
import type { ParserOptions } from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import type { Options as VueBlocksOptions } from 'eslint-processor-vue-blocks';
import type { BuiltInParserName, LiteralUnion, RequiredOptions } from 'prettier';

export type Rules = Record<string, Linter.RuleEntry<any> | undefined>;

export interface BaseOptions {
  /**
   * The current working directory
   *
   * @default process.cwd()
   */
  cwd: string;
  /**
   * @default
   * {
   *  "html": true,
   *  "css": true,
   *  "json": true,
   * }
   */
  formatter: {
    css?: boolean;
    html?: boolean;
    json?: boolean;
    markdown?: boolean;
    toml?: boolean;
    yaml?: boolean;
  };
  /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @default true
   * @see https://github.com/antfu/eslint-config-flat-gitignore
   */
  gitignore?: boolean | FlatGitignoreOptions;
  /** The globs to ignore lint */
  ignores: string[];
  /** The override rules */
  overrides: Record<string, any>;
  /**
   * Default prettier rules
   *
   * @default
   * ```json
   * {
   *   "printWidth": 120,
   *   "singleQuote": true,
   *   "trailingComma": "none",
   *   "arrowParens": "avoid",
   *   "htmlWhitespaceSensitivity": "ignore"
   * }
   * ```
   */
  prettierRules: PartialPrettierExtendedOptions;

  /**
   * Whether to use prettierrc
   *
   * If true, the rules in prettierrc will override the default rules
   *
   * @default true
   */
  usePrettierrc: boolean;
}

export type RuleBaseOptions<T = NonNullable<unknown>> = T & {
  /** The glob patterns to lint */
  files?: string[];
};

export type VueOptions = RuleBaseOptions<{
  /**
   * The vue version
   *
   * @default 3
   */
  version?: 2 | 3;
}>;

export type OnDemandRuleKey = 'react' | 'react-native' | 'vue';

export type OnDemandRuleOptions = Partial<Record<Exclude<OnDemandRuleKey, 'vue'>, RuleBaseOptions | boolean>>;

export type Options = Partial<BaseOptions> & {
  vue?: VueOptions | boolean;
} & OnDemandRuleOptions & {
  unocss?: boolean;
};

export type Awaitable<T> = T | Promise<T>;
/**
 * An updated version of ESLint's `Linter.Config`, which provides autocompletion
 * for `rules` and relaxes type limitations for `plugins` and `rules`, because
 * many plugins still lack proper type definitions.
 */
export type FlatConfigItem = Omit<Linter.Config, 'plugins' | 'rules'> & {
  /**
   * An object containing a name-value mapping of plugin names to plugin objects.
   * When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>;

  /**
   * An object containing the configured rules. When `files` or `ignores` are
   * specified, these rule configurations are only available to the matching files.
   */
  rules?: Rules;
};

export type PrettierCustomParser = 'astro' | 'jsdoc-parser' | 'svelte' | 'toml';

export type PrettierParser = BuiltInParserName | PrettierCustomParser;

export interface OptionsFiles {
  files?: string[];
}
export interface PrettierOptions extends RequiredOptions {
  parser: LiteralUnion<PrettierParser>;
}

export type PartialPrettierExtendedOptions = Partial<PrettierOptions>;

export interface OptionsUnocss {
  enable?: boolean;
  /**
   * Override rules.
   */
  overrides?: Linter.RulesRecord;
}

export interface OptionsIsInEditor {
  isInEditor?: boolean;
}

export interface OptionsComponentExts {
  /**
   * Additional extensions for components.
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[];
}

export interface OptionsRegExp {
  /**
   * Override rulelevels
   */
  level?: 'error' | 'warn';
}

export interface OptionsOverrides {
  overrides?: Linter.RulesRecord;
}

export interface OptionsTypeScriptWithTypes {
  /**
   * Override type aware rules.
   */
  overridesTypeAware?: FlatConfigItem['rules'];

  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string;
}

export interface OptionsTypeScriptErasableOnly {
  /**
   * Enable erasable syntax only rules.
   *
   * @see https://github.com/JoshuaKGoldberg/eslint-plugin-erasable-syntax-only
   * @default false
   */
  erasableOnly?: boolean;
}

export interface OptionsProjectType {
  /**
   * Type of the project. `lib` will enable more strict rules for libraries.
   *
   * @default 'app'
   */
  type?: 'app' | 'lib';
}

export interface OptionsTypeScriptParserOptions {
  /**
   * Glob patterns for files that should be type aware.
   * @default ['**\/*.{ts,tsx}']
   */
  filesTypeAware?: string[];

  /**
   * Glob patterns for files that should not be type aware.
   * @default ['**\/*.md\/**', '**\/*.astro/*.ts']
   */
  ignoresTypeAware?: string[];

  /**
   * Additional parser options for TypeScript.
   */
  parserOptions?: Partial<ParserOptions>;
}

export interface OptionsTypeScript extends OptionsFiles, OptionsOverrides {
  filesTypeAware?: string[];
  ignoresTypeAware?: string[];
  tsconfigPath?: string;
}

export interface OptionsHasTypeScript {
  typescript?: boolean;
}

export interface OptionsReact extends OptionsFiles, OptionsOverrides {
  tsconfigPath?: string;
}

export interface StylisticConfig extends Pick<StylisticCustomizeOptions, 'indent' | 'jsx' | 'quotes' | 'semi'> {}

export interface OptionsStylistic {
  stylistic?: boolean | StylisticConfig;
}

export interface OptionsReactNative extends OptionsFiles, OptionsOverrides {}

export interface OptionsNext extends OptionsOverrides, OptionsFiles {}

export interface OptionsTailwindCSS extends OptionsOverrides {
  /**
   * Callees to lint
   * @default ['classnames', 'clsx', 'ctl', 'cn', 'cva']
   */
  callees?: string[];

  config?: string | boolean;
  /**
   * Regex to match class attributes
   * @default "^class(Name)?$"
   */
  classRegex?: string;

  /**
   * CSS files to lint
   * @default ['**\/*.css', '!**\/node_modules', '!**\/.*', '!**\/dist', '!**\/build']
   */
  cssFiles?: string[];

  /**
   * CSS files refresh rate in milliseconds
   * @default 5000
   */
  cssFilesRefreshRate?: number;

  /**
   * Enable Tailwind CSS linting
   * @default true if tailwindcss package is installed
   */
  enable?: boolean;

  /**
   * Remove duplicates
   * @default true
   */
  removeDuplicates?: boolean;

  /**
   * Skip class attribute
   * @default false
   */
  skipClassAttribute?: boolean;

  /**
   * Tags to lint (e.g. ['tw'] for tw`bg-blue`)
   * @default []
   */
  tags?: string[];

  /**
   * Whitelist of class names
   * @default []
   */
  whitelist?: string[];
}

export interface OptionsVue extends OptionsFiles, OptionsOverrides {
  /**
   * Create virtual files for Vue SFC blocks to enable linting.
   *
   * @see https://github.com/antfu/eslint-processor-vue-blocks
   * @default true
   */
  sfcBlocks?: boolean | VueBlocksOptions;

  /**
   * Vue version. Apply different rules set from `eslint-plugin-vue`.
   *
   * @default 3
   */
  vueVersion?: 2 | 3;
}

export interface OptionsFormatter {
  /**
   * Format CSS files
   *
   * @default true
   */
  css?: boolean;

  /**
   * Format HTML files
   *
   * @default true
   */
  html?: boolean;

  /**
   * Format JSON files
   *
   * @default true
   */
  json?: boolean;

  /**
   * Format Markdown files
   *
   * @default false
   */
  markdown?: boolean;

  /**
   * Format TOML files
   *
   * @default false
   */
  toml?: boolean;

  /**
   * Format YAML files
   *
   * @default false
   */
  yaml?: boolean;
}

export interface SkryocESLintConfig extends OptionsComponentExts {
  /**
   * Enable auto renaming of plugins
   *
   * @default true
   */
  autoRenamePlugins?: boolean;
  /**
   * Whether to run in editor environment
   *
   * @default undefined
   */
  isInEditor?: boolean;

  unicorn?: boolean | OptionsUnicorn;

  /**
   * Enable formatter support for various file types
   *
   * @default true
   */
  formatter?: boolean | OptionsFormatter;

  /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @default true
   * @see https://github.com/antfu/eslint-config-flat-gitignore
   */
  gitignore?: boolean | FlatGitignoreOptions;

  /**
   * Glob patterns to ignore
   *
   * @default []
   */
  ignores?: string[];

  /**
   * Global overrides for all configurations
   */
  overrides?: {
    javascript?: Linter.RulesRecord;
    jsdoc?: Linter.RulesRecord;
    jsonc?: Linter.RulesRecord;
    markdown?: Linter.RulesRecord;
    next?: Linter.RulesRecord;
    react?: Linter.RulesRecord;
    reactNative?: Linter.RulesRecord;
    regexp?: Linter.RulesRecord;
    stylistic?: Linter.RulesRecord;
    tailwindcss?: Linter.RulesRecord;
    test?: Linter.RulesRecord;
    toml?: Linter.RulesRecord;
    typescript?: Linter.RulesRecord;
    unicorn?: Linter.RulesRecord;
    unocss?: Linter.RulesRecord;
    vue?: Linter.RulesRecord;
    yaml?: Linter.RulesRecord;
  };

  /**
   * Enable JSDoc rules
   *
   * @default true
   */
  jsdoc?: boolean | OptionsStylistic;

  /**
   * Enable JSONC support
   *
   * @default true
   */
  jsonc?: boolean | OptionsOverrides;

  /**
   * Enable Markdown support
   *
   * @default true
   */
  markdown?: boolean | OptionsOverrides;

  /**
   * Enable Next.js support
   *
   * Auto-detected based on dependencies
   */
  next?: boolean | OptionsNext;

  /**
   * Enable Perfectionist rules for sorting
   *
   * @default true
   */
  perfectionist?: boolean;

  /**
   * Enable PNPM catalog support
   *
   * @default false
   */
  pnpm?: boolean;

  /**
   * Enable React support
   *
   * Auto-detected based on dependencies
   */
  react?: boolean | OptionsReact;

  /**
   * Enable React Native support
   *
   * @default false
   */
  reactNative?: boolean | OptionsReactNative;

  /**
   * Enable RegExp rules
   *
   * @default true
   */
  regexp?: boolean | OptionsRegExp;

  /**
   * Enable Stylistic rules
   *
   * @default true
   */
  stylistic?: boolean | StylisticConfig;

  /**
   * Enable Tailwind CSS support
   *
   * Auto-detected based on dependencies
   */
  tailwindcss?: boolean | OptionsTailwindCSS;

  /**
   * Enable test support
   *
   * @default true
   */
  test?: boolean | OptionsOverrides;

  /**
   * Enable TOML support
   *
   * @default true
   */
  toml?: boolean | OptionsOverrides;

  /**
   * Enable TypeScript support
   *
   * Auto-detected based on dependencies
   */
  typescript?: boolean | OptionsTypeScript;

  /**
   * Enable UnoCSS support
   *
   * @default false
   */
  unocss?: boolean | OptionsUnocss;

  /**
   * Enable Vue support
   *
   * Auto-detected based on dependencies
   */
  vue?: boolean | OptionsVue;

  /**
   * Enable YAML support
   *
   * @default true
   */
  yaml?: boolean | OptionsOverrides;
}

export interface OptionsUnicorn extends OptionsOverrides {
  /**
   * Include all rules recommended by `eslint-plugin-unicorn`, instead of only ones picked by Anthony.
   *
   * @default false
   */
  allRecommended?: boolean;
}

interface FlatGitignoreOptions {
  /**
   * Current working directory.
   * Used to resolve relative paths.
   * @default process.cwd()
   */
  cwd?: string;
  /**
   * Path to `.gitignore` files, or files with compatible formats like `.eslintignore`.
   * @default ['.gitignore'] // or findUpSync('.gitignore')
   */
  files?: string | string[];
  /**
   * Path to `.gitmodules` file.
   * @default ['.gitmodules'] // or findUpSync('.gitmodules')
   */
  filesGitModules?: string | string[];
  /**
   * Name of the configuration.
   * @default 'gitignore'
   */
  name?: string;
  /**
   * Mark the current working directory as the root directory,
   * disable searching for `.gitignore` files in parent directories.
   *
   * This option is not effective when `files` is explicitly specified.
   * @default false
   */
  root?: boolean;
  /**
   * Throw an error if gitignore file not found.
   * @default true
   */
  strict?: boolean;
}
