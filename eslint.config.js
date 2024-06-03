import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import reactrefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2022,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      react: pluginReact,
      'react-refresh': reactrefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // ...pluginReactConfig.rules
    },
  },
  ...tseslint.configs.recommended,
  {
    ignores: ['coverage', 'public/*', 'yarn.lock', 'dist'],
  },
  eslintPluginPrettierRecommended,
];
