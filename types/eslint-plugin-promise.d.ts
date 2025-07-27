declare module 'eslint-plugin-promise' {
  import { Linter } from 'eslint';

  export const configs: {
    'flat/recommended': Linter.Config;
  };
}
