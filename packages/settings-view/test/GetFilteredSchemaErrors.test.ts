import { expect, test } from '@jest/globals'
import { getFilteredSchemaErrors } from '../src/parts/GetFilteredSchemaErrors/GetFilteredSchemaErrors.ts'

test('filters schema errors by id, message, and source', () => {
  const errors = [
    { id: 'one.setting', message: 'unknown type', source: 'First Extension' },
    { id: 'two.setting', message: 'missing value', source: 'Second Extension' },
  ]
  expect(getFilteredSchemaErrors(errors, 'second extension')).toEqual([errors[1]])
  expect(getFilteredSchemaErrors(errors, '')).toBe(errors)
})
