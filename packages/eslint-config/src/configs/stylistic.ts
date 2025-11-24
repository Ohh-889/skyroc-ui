import type { FlatConfigItem, OptionsOverrides, StylisticConfig } from '../types'
import { pluginAntfu } from '../plugins'
import { interopDefault } from '../utils'

export const StylisticConfigDefaults: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
}

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {
  lessOpinionated?: boolean
}

export async function stylistic(options: StylisticOptions = {}): Promise<FlatConfigItem[]> {
  const {
    indent,
    jsx,
    lessOpinionated = false,
    overrides = {},
    quotes,
    semi,
  } = {
    ...StylisticConfigDefaults,
    ...options,
  }

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'))

  const config = pluginStylistic.configs.customize({
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
  }) as FlatConfigItem

  return [
    {
      name: 'skyroc/stylistic/rules',
      plugins: {
        antfu: pluginAntfu,
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,

        'antfu/consistent-chaining': 'error',
        'antfu/consistent-list-newline': 'error',

        ...(lessOpinionated
          ? {
            curly: ['error', 'all'],
          }
          : {
            'antfu/curly': 'error',
            'antfu/if-newline': 'error',
            'antfu/top-level-function': 'error',
          }),

        'no-multiple-empty-lines': 'warn',
        'style/indent': ['warn', 2],
        'style/no-trailing-spaces': 'warn',
        'style/generator-star-spacing': ['error', { after: true, before: false }],
        'style/yield-star-spacing': ['error', { after: true, before: false }],

        ...overrides,
      },
    },
  ]
}
