import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    rules: {
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
]);
