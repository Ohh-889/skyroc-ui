import skyroc from '@skyroc/eslint-config'

export default skyroc({
  next: true,
  react: true,
  tailwindcss: {
    config: false
  },
  markdown: true,
  pnpm: true
})
