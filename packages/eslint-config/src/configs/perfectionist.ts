import type { FlatConfigItem } from '../types';
import { pluginPerfectionist } from '../plugins';

/**
 * Perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export async function perfectionist(): Promise<FlatConfigItem[]> {
  return [
    {
      name: 'skyroc/perfectionist/setup',
      plugins: {
        perfectionist: pluginPerfectionist
      },
      rules: {

      }
    }
  ];
}
