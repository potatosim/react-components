/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      all: true,
      include: ['src/**/*.tsx'],
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/setupTests.ts'],
      provider: 'istanbul',
      reportsDirectory: './src/tests/coverage',
    },
  },
  server: {
    open: true,
  },
});
