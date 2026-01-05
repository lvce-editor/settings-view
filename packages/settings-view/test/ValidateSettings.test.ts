import { test, expect } from '@jest/globals'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import { validateSettings } from '../src/parts/ValidateSettings/ValidateSettings.ts'

test.skip('validateSettings converts SettingItem to DisplaySettingItem with validation', () => {
  const items: SettingItem[] = [
    {
      category: 'test',
      description: 'Test description 1',
      heading: 'Test Setting 1',
      id: 'test1',
      type: SettingItemType.String,
      validate: (value: any) => (value === 'valid value' ? '' : 'Invalid value'),
      value: 'valid value',
    },
    {
      category: 'test',
      description: 'Test description 2',
      heading: 'Test Setting 2',
      id: 'test2',
      type: SettingItemType.Number,
      validate: (value: any) => (value < 0 ? 'Must be positive' : ''),
      value: -5,
    },
  ]

  const preferences = { test1: true }
  const result = validateSettings(items, preferences, preferences)

  expect(result).toHaveLength(2)

  // Check first item (valid, modified)
  expect(result[0]).toEqual({
    category: 'test',
    description: 'Test description 1',
    errorMessage: '',
    hasError: false,
    heading: 'Test Setting 1',
    id: 'test1',
    modified: true,
    options: undefined,
    type: SettingItemType.String,
    value: 'valid value',
  })

  // Check second item (invalid, not modified)
  expect(result[1]).toEqual({
    category: 'test',
    description: 'Test description 2',
    errorMessage: 'Must be positive',
    hasError: true,
    heading: 'Test Setting 2',
    id: 'test2',
    modified: false,
    options: undefined,
    type: SettingItemType.Number,
    value: -5,
  })
})

test('validateSettings handles items without validation functions', () => {
  const items: SettingItem[] = [
    {
      category: 'test',
      description: 'Test description',
      heading: 'Test Setting',
      id: 'test',
      type: SettingItemType.Boolean,
      value: true,
    },
  ]

  const preferences = {}
  const result = validateSettings(items, preferences, preferences)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    category: 'test',
    description: 'Test description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Setting',
    id: 'test',
    modified: false,
    options: undefined,
    type: SettingItemType.Boolean,
    value: true,
  })
})
