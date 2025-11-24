import { skyroc } from './src/factory'

export default skyroc(
  {
    ignores: ['dist', 'node_modules', '*.d.ts'],
    tailwindcss: false,
    typescript: true,
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'import/order': 'off',
    },
  },
  {
    files: ['src/plugins.ts'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'ts/ban-ts-comment': 'off',
    },
  },
  {
    files: ['src/utils/index.ts'],
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
)
