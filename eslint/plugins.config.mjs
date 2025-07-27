import eslintJs from '@eslint/js';
import pluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import { importX } from 'eslint-plugin-import-x';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginNode from 'eslint-plugin-n';
import pluginPlaywright from 'eslint-plugin-playwright';
import pluginPromise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import * as pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import * as typescriptEslint from 'typescript-eslint';

export default defineConfig([
  eslintJs.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    semi: true,
  }),
  importX.flatConfigs.recommended,
  ...typescriptEslint.config(
    typescriptEslint.configs.recommended,
    typescriptEslint.configs.strict,
    typescriptEslint.configs.recommendedTypeChecked,
    typescriptEslint.configs.stylisticTypeChecked,
    {
      files: ['**/*.{ts,tsx}'],
      extends: [importX.flatConfigs.typescript],
    },
  ),
  pluginEslintComments.recommended,
  pluginNode.configs['flat/recommended'],
  pluginPromise.configs['flat/recommended'],
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginReactHooks.configs['recommended-latest'],
  pluginJsxA11y.flatConfigs.recommended,
  pluginPlaywright.configs['flat/recommended'],
  {
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
  },
]);
