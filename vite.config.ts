/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      all: true,
      include: ['src/**/*.tsx'],
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/setupTests.ts'],
      provider: 'c8',
    },
  },
  server: {
    open: true,
  },
});
