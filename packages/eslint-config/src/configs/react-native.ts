import type { FlatConfigItem, OptionsReactNative } from '../types';
import { ensurePackages, interopDefault } from '../utils';
import { GLOB_SRC } from '../utils/globs';

export async function reactNative(options: OptionsReactNative = {}): Promise<FlatConfigItem[]> {
  const { files = [GLOB_SRC], overrides = {} } = options;

  await ensurePackages(['eslint-plugin-react-native']);

  const pluginReactNative = await interopDefault(import('eslint-plugin-react-native'));

  return [
    {
      name: 'skyroc/react-native/setup',
      plugins: {
        'react-native': pluginReactNative
      }
    },
    {
      files,
      languageOptions: {
        globals: {
          ...pluginReactNative.environments?.['react-native']?.globals
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      name: 'skyroc/react-native/rules',
      rules: {
        'react-native/no-color-literals': 'warn',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-raw-text': 'off',
        'react-native/no-unused-styles': 'error',
        'react-native/sort-styles': 'off',
        'react-native/split-platform-components': 'warn',
        ...overrides
      }
    }
  ];
}
