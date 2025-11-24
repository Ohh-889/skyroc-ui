import { configs } from 'eslint-plugin-regexp';
import type { FlatConfigItem, OptionsOverrides, OptionsRegExp } from '../types';

export async function regexp(options: OptionsRegExp & OptionsOverrides = {}): Promise<FlatConfigItem[]> {
  const config = configs['flat/recommended'] as FlatConfigItem;

  const rules = {
    ...config.rules
  };

  if (options.level === 'warn') {
    for (const key in rules) {
      if (rules[key] === 'error')
        rules[key] = 'warn';
    }
  }

  return [
    {
      ...config,
      name: 'skyroc/regexp/rules',
      rules: {
        ...rules,
        ...options.overrides
      }
    }
  ];
}
