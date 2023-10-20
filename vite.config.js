import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    eslintPlugin({
      assetsInclude: ['**/*.mp3', '**/*.jpeg', '**/*.png', '**/*.task'],
      cache: false,
    }),
  ],
});
