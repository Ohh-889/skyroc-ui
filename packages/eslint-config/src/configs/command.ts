import type { FlatConfigItem } from '../types'
import createCommand from 'eslint-plugin-command/config'

export async function command(): Promise<FlatConfigItem[]> {
  return [
    {
      ...(createCommand() as any),
      name: 'antfu/command/rules',
    },
  ]
}
