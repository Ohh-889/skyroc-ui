import type { FlatConfigItem, OptionsTailwindCSS } from '../types';
import { ensurePackages, interopDefault } from '../utils';

export async function tailwindcss(options: OptionsTailwindCSS = {}): Promise<FlatConfigItem[]> {
  const {
    callees = ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
    classRegex = '^class(Name)?$',
    cssFiles = ['**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
    cssFilesRefreshRate = 5000,
    enable = true,
    overrides = {},
    config = false,
    removeDuplicates = true,
    skipClassAttribute = false,
    tags = [],
    whitelist = []
  } = options;

  if (!enable)
    return [];

  await ensurePackages(['eslint-plugin-tailwindcss']);

  const pluginTailwindcss = await interopDefault(import('eslint-plugin-tailwindcss'));

  const configs: FlatConfigItem[] = [
    {
      name: 'skyroc:tailwindcss',
      plugins: {
        tailwindcss: pluginTailwindcss
      },
      rules: {
        ...(pluginTailwindcss.configs.recommended.rules as any),
        // 强制 class 属性按照推荐的顺序排列
        'tailwindcss/classnames-order': 'warn',
        // 强制执行比标准的 Tailwind CSS 类更短的替代方案
        'tailwindcss/enforces-shorthand': 'warn',
        // 禁止在类名中使用任意值
        'tailwindcss/no-arbitrary-value': 'off',
        // 禁止冲突的类名
        'tailwindcss/no-contradicting-classname': 'error',
        // 禁止使用自定义类名
        'tailwindcss/no-custom-classname': 'off',
        // 禁止不必要的任意值
        'tailwindcss/no-unnecessary-arbitrary-value': 'off',
        ...overrides
      },
      settings: {
        tailwindcss: {
          callees,
          config,
          classRegex,
          cssFiles,
          cssFilesRefreshRate,
          removeDuplicates,
          skipClassAttribute,
          tags,
          whitelist
        }
      }
    }
  ];

  return configs;
}
