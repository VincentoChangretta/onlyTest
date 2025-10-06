module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      project: ['./tsconfig.json'],
   },
   settings: {
      react: { version: 'detect' },
      'import/resolver': {
         typescript: {},
         node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
   },
   plugins: ['react', 'react-hooks', '@typescript-eslint', 'fsd-layer-imports', 'import', 'unused-imports'],
   extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:react-hooks/recommended', 'prettier', 'plugin:storybook/recommended'],
   env: { browser: true, es2022: true, node: true },
   rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'import/no-unresolved': 'error',
      'import/no-extraneous-dependencies': [
         'error',
         { devDependencies: ['**/*.test.{ts,tsx}', '**/webpack/**', '**/vite/**'] },
      ],
      'import/order': [
         'error',
         {
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
         },
      ],

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
   },
};
