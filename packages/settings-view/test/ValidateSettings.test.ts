import { test, expect } from '@jest/globals'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import { validateSettings } from '../src/parts/ValidateSettings/ValidateSettings.ts'

test.skip('validateSettings converts SettingItem to DisplaySettingItem with validation', () => {
  const items: SettingItem[] = [
    {
      id: 'test1',
      heading: 'Test Setting 1',
      description: 'Test description 1',
      type: SettingItemType.String,
      value: 'valid value',
      category: 'test',
      validate: (value: any) => (value === 'valid value' ? '' : 'Invalid value'),
    },
    {
      id: 'test2',
      heading: 'Test Setting 2',
      description: 'Test description 2',
      type: SettingItemType.Number,
      value: -5,
      category: 'test',
      validate: (value: any) => (value < 0 ? 'Must be positive' : ''),
    },
  ]

  const preferences = { test1: true }
  const result = validateSettings(items, preferences, preferences)

  expect(result).toHaveLength(2)

  // Check first item (valid, modified)
  expect(result[0]).toEqual({
    id: 'test1',
    heading: 'Test Setting 1',
    description: 'Test description 1',
    type: SettingItemType.String,
    value: 'valid value',
    category: 'test',
    options: undefined,
    modified: true,
    errorMessage: '',
    hasError: false,
  })

  // Check second item (invalid, not modified)
  expect(result[1]).toEqual({
    id: 'test2',
    heading: 'Test Setting 2',
    description: 'Test description 2',
    type: SettingItemType.Number,
    value: -5,
    category: 'test',
    options: undefined,
    modified: false,
    errorMessage: 'Must be positive',
    hasError: true,
  })
})

test('validateSettings handles items without validation functions', () => {
  const items: SettingItem[] = [
    {
      id: 'test',
      heading: 'Test Setting',
      description: 'Test description',
      type: SettingItemType.Boolean,
      value: true,
      category: 'test',
    },
  ]

  const preferences = {}
  const result = validateSettings(items, preferences, preferences)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    id: 'test',
    heading: 'Test Setting',
    description: 'Test description',
    type: SettingItemType.Boolean,
    value: true,
    category: 'test',
    options: undefined,
    modified: false,
    errorMessage: '',
    hasError: false,
  })
})
