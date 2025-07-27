import { defineConfig } from 'eslint/config';
import eslintCommentsConfig from './eslint/eslint-comments.config';
import globalsConfig from './eslint/globals.config';
import importsConfig from './eslint/imports.config';
import jsConfig from './eslint/js.config';
import nodeConfig from './eslint/node.config';
import playwrightConfig from './eslint/playwright.config';
import pluginsConfig from './eslint/plugins.config';
import promiseConfig from './eslint/promise.config';
import reactConfig from './eslint/react.config';
import tsConfig from './eslint/ts.config';

export default defineConfig([
  globalsConfig,
  pluginsConfig,
  eslintCommentsConfig,
  promiseConfig,
  nodeConfig,
  importsConfig,
  playwrightConfig,
  reactConfig,
  jsConfig,
  tsConfig,
]);
