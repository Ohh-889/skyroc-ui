import type { FlatConfigItem, OptionsFiles, OptionsOverrides, OptionsStylistic } from '../types';
import { interopDefault } from '../utils';
import { GLOB_YAML } from '../utils/globs';

export async function yaml(
  options: OptionsOverrides & OptionsStylistic & OptionsFiles = {}
): Promise<FlatConfigItem[]> {
  const { files = [GLOB_YAML], overrides = {}, stylistic = true } = options;

  const { indent = 2, quotes = 'single' } = typeof stylistic === 'boolean' ? {} : stylistic;

  const [pluginYaml, parserYaml] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser'))
  ] as const);

  return [
    {
      name: 'skyroc/yaml/setup',
      plugins: {
        yaml: pluginYaml
      }
    },
    {
      files,
      languageOptions: {
        parser: parserYaml
      },
      name: 'skyroc/yaml/rules',
      rules: {
        'style/spaced-comment': 'off',

        'yaml/block-mapping': 'error',
        'yaml/block-sequence': 'error',
        'yaml/no-empty-key': 'error',
        'yaml/no-empty-sequence-entry': 'error',
        'yaml/no-irregular-whitespace': 'error',
        'yaml/plain-scalar': 'error',

        'yaml/vue-custom-block/no-parsing-error': 'error',

        ...(stylistic
          ? {
            'yaml/block-mapping-question-indicator-newline': 'error',
            'yaml/block-sequence-hyphen-indicator-newline': 'error',
            'yaml/flow-mapping-curly-newline': 'error',
            'yaml/flow-mapping-curly-spacing': 'error',
            'yaml/flow-sequence-bracket-newline': 'error',
            'yaml/flow-sequence-bracket-spacing': 'error',
            'yaml/indent': ['error', indent === 'tab' ? 2 : indent],
            'yaml/key-spacing': 'error',
            'yaml/no-tab-indent': 'error',
            'yaml/quotes': ['error', { avoidEscape: true, prefer: quotes === 'backtick' ? 'single' : quotes }],
            'yaml/spaced-comment': 'error'
          }
          : {}),

        ...overrides
      }
    },
    {
      files: ['pnpm-workspace.yaml'],
      name: 'skyroc/yaml/pnpm-workspace',
      rules: {
        'yaml/sort-keys': [
          'error',
          {
            order: [
              'packages',
              'overrides',
              'patchedDependencies',
              'hoistPattern',
              'catalog',
              'catalogs',

              'allowedDeprecatedVersions',
              'allowNonAppliedPatches',
              'configDependencies',
              'ignoredBuiltDependencies',
              'ignoredOptionalDependencies',
              'neverBuiltDependencies',
              'onlyBuiltDependencies',
              'onlyBuiltDependenciesFile',
              'packageExtensions',
              'peerDependencyRules',
              'supportedArchitectures'
            ],
            pathPattern: '^$'
          },
          {
            order: { type: 'asc' },
            pathPattern: '.*'
          }
        ]
      }
    }
  ];
}
