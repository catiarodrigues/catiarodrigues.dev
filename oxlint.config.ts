import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['react', 'typescript', 'unicorn', 'jsx-a11y', 'import'],
  categories: {
    correctness: 'warn',
    suspicious: 'off',
    pedantic: 'off',
    style: 'off',
    nursery: 'off',
    restriction: 'off',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'react/jsx-key': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/react-in-jsx-scope': 'off',
    'unicorn/filename-case': 'off',
    'react/jsx-max-depth': 'off',
    'import/no-named-export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unassigned-import': 'off',
    'import/consistent-type-specifier-style': 'off',
    'import/group-exports': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-global-this': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-duplicates': 'error',
  },
  ignorePatterns: ['**/node_modules', '**/dist', '**/*.d.ts'],
});
