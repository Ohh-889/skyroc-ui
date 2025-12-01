const config = {
  githubUrl: 'https://github.com/Ohh-889/skyroc-ui',
  isDev: process.env.NODE_ENV === 'development',
  META_THEME_COLORS: {
    dark: '#030712',
    light: '#fafafa'
  }
} as const;

export default config;
