module.exports = {
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier', 'plugin:import/errors'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  settings: {
    'import/resolver': 'webpack'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    eqeqeq: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': [
      'error',
      // Ignore no-unused-vars for variables named only with underscores: `_`, `__`, etc.
      {
        varsIgnorePattern: '^_+$',
        argsIgnorePattern: '^_+$',
        caughtErrorsIgnorePattern: '^_+$'
      }
    ],
    'import/no-unresolved': ['off'],
    'import/first': ['error'],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'import/newline-after-import': ['warn']
  },
  overrides: [
    {
      files: ['**/__tests__/*.js'],
      env: {
        jest: true
      }
    }
  ]
};
