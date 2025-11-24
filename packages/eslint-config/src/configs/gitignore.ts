import type { FlatConfigItem } from '../types';
import { interopDefault } from '../utils';

export async function gitignore(): Promise<FlatConfigItem[]> {
  const gitignoreConfig = await interopDefault(import('eslint-config-flat-gitignore'));

  return [
    gitignoreConfig({
      name: 'skyroc/gitignore',
      strict: false
    }) as FlatConfigItem
  ];
}
