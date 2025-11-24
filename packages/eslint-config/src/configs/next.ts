import type { FlatConfigItem, OptionsNext } from '../types';
import { ensurePackages, interopDefault } from '../utils';
import { GLOB_SRC } from '../utils/globs';

function normalizeRules(rules: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => [key, typeof value === 'string' ? [value] : value])
  );
}

export async function next(options: OptionsNext = {}): Promise<FlatConfigItem[]> {
  const { files = [GLOB_SRC], overrides = {} } = options;

  await ensurePackages(['@next/eslint-plugin-next']);

  const pluginNext = await interopDefault(import('@next/eslint-plugin-next'));

  function getRules(name: keyof typeof pluginNext.configs): Record<string, any> {
    const rules = pluginNext.configs?.[name]?.rules;
    if (!rules)
      throw new Error(`[skyroc/eslint-config] Failed to find config ${name} in @next/eslint-plugin-next`);
    return normalizeRules(rules);
  }

  return [
    {
      name: 'skyroc/next/setup',
      plugins: {
        '@next/next': pluginNext
      }
    },
    {
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        },
        sourceType: 'module'
      },
      name: 'skyroc/next/rules',
      rules: {
        ...getRules('recommended'),
        ...getRules('core-web-vitals'),

        // overrides
        ...overrides
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    }
  ];
}
