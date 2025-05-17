import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ['dist'], 
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'warn',
      'capitalized-comments': [
        'warn',
        'always',
        {
          ignoreConsecutiveComments: true,
          ignorePattern: '^[A-Z_]+$',
        },
      ],
      camelcase: ['error', { properties: 'always' }],
      'prefer-arrow-callback': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],
    },
  },
  js.configs.recommended, 
];
