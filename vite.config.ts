import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'uikit',
      fileName: 'uikit',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  resolve: { alias: { src: resolve('src/') } },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        'src/**/*.stories.tsx',
        'src/**/*.stories.ts',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        'src/setupTests.ts',
      ],
    }),
  ],
});
