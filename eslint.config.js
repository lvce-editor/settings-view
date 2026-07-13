import * as config from '@lvce-editor/eslint-config'

export default [
  ...config.default,
  {
    rules: {
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@cspell/spellchecker': 'off',
      '@typescript-eslint/only-throw-error': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      'e18e/prefer-array-at': 'off',
      'jest/expect-expect': 'off',
      'jest/no-disabled-tests': 'off',
      'sonarjs/assertions-in-tests': 'off',
      'sonarjs/prefer-specific-assertions': 'off',
      'unicorn/no-useless-template-literals': 'off',
    },
  },
]
