import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    rules: {
      'playwright/no-conditional-in-test': 'error',
      'playwright/no-conditional-expect': 'error',
    },
  },
]);
