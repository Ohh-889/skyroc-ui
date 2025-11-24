import { skyroc } from './src/factory'

export default skyroc(
  {
    ignores: ['dist', 'node_modules', '*.d.ts'],
    tailwindcss: false,
    formatter: true,
    typescript: true,
  },
)
