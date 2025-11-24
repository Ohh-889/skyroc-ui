import type { FlatConfigItem } from '../types'
import { GLOB_EXCLUDE } from '../utils/globs'

export function ignores(userIgnores: string[] = []): FlatConfigItem[] {
  return [
    {
      ignores: [...GLOB_EXCLUDE, ...userIgnores],
      name: 'skyroc/ignores',
    },
  ]
}
