import createCommand from 'eslint-plugin-command/config';
import type { FlatConfigItem } from '../types';

export async function command(): Promise<FlatConfigItem[]> {
  return [
    {
      ...(createCommand() as any),
      name: 'skyroc/command/rules'
    }
  ];
}
