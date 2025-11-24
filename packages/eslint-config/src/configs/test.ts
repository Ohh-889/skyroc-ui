import type { FlatConfigItem, OptionsFiles, OptionsIsInEditor, OptionsOverrides } from '../types'
import { interopDefault } from '../utils'
import { GLOB_TESTS } from '../utils/globs'

// Hold the reference so we don't redeclare the plugin on each call
let _pluginTest: any

export async function test(
  options: OptionsFiles & OptionsIsInEditor & OptionsOverrides = {},
): Promise<FlatConfigItem[]> {
  const { files = GLOB_TESTS, isInEditor = false, overrides = {} } = options

  const [pluginVitest, pluginNoOnlyTests] = await Promise.all([
    interopDefault(import('@vitest/eslint-plugin')),
    // @ts-expect-error missing types
    interopDefault(import('eslint-plugin-no-only-tests')),
  ] as const)

  _pluginTest ??= {
    ...pluginVitest,
    rules: {
      ...pluginVitest.rules,
      // extend `test/no-only-tests` rule
      ...pluginNoOnlyTests.rules,
    },
  }

  return [
    {
      name: 'skyroc/test/setup',
      plugins: {
        test: _pluginTest,
      },
    },
    {
      files,
      name: 'skyroc/test/rules',
      rules: {
        'test/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
        'test/no-identical-title': 'error',
        'test/no-import-node-test': 'error',
        'test/no-only-tests': isInEditor ? 'warn' : 'error',

        'test/prefer-hooks-in-order': 'error',
        'test/prefer-lowercase-title': 'error',

        // Disables
        ...{
          'antfu/no-top-level-await': 'off',
          'no-unused-expressions': 'off',
          'node/prefer-global/process': 'off',
          'ts/explicit-function-return-type': 'off',
        },

        ...overrides,
      },
    },
  ]
}
