import { defineConfig } from 'tsdown';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)],
  hooks: {
    'build:before': () => {
      console.log('📦 Building next-docs-themes with Tsdown...');
    },
    'build:done': () => {
      console.log('🎉 Build completed successfully!');
      console.log('📦 Generated files in ./dist/');
    }
  },
  minify: false,
  platform: 'neutral',
  sourcemap: false,
  unbundle: true
});
