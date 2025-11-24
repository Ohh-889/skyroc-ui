import type { FlatConfigItem, OptionsUnocss } from '../types'
import { ensurePackages, interopDefault } from '../utils'

export async function createUnocssConfig(options: OptionsUnocss = {}) {
  const { enable = true, overrides = {} } = options

  if (!enable)
    return []

  await ensurePackages(['@unocss/eslint-config'])

  const pluginUnocss = await interopDefault(import('@unocss/eslint-config'))

  const configs: FlatConfigItem[] = [
    {
      plugins: {
        unocss: pluginUnocss,
      },
      rules: {
        'unocss/blocklist': 'off',
        'unocss/order': 'warn',
        'unocss/order-attributify': 'off',
        ...overrides,
      },
    },
  ]

  return configs
}
