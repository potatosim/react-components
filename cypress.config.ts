import { defineConfig } from 'cypress';
import task from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      task(on, config);
      return config;
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalRunAllSpecs: true,
  },
});
