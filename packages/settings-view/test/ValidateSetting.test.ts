import { test, expect } from '@jest/globals'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import { validateSetting } from '../src/parts/ValidateSetting/ValidateSetting.ts'

test('validateSetting returns empty string when no validate function is provided', () => {
  const item: SettingItem = {
    category: 'test',
    description: 'Test description',
    heading: 'Test Setting',
    id: 'test',
    type: 2,
    value: 'test value',
  }
  const result = validateSetting(item)
  expect(result).toBe('')
})

test('validateSetting returns error message when validate function returns error', () => {
  const item: SettingItem = {
    category: 'test',
    description: 'Test description',
    heading: 'Test Setting',
    id: 'test',
    type: 2,
    validate: (value: any) => {
      if (value === 'invalid value') {
        return 'Invalid value provided'
      }
      return ''
    },
    value: 'invalid value',
  }
  const result = validateSetting(item)
  expect(result).toBe('Invalid value provided')
})

test('validateSetting returns empty string when validate function returns empty string', () => {
  const item: SettingItem = {
    category: 'test',
    description: 'Test description',
    heading: 'Test Setting',
    id: 'test',
    type: 2,
    validate: (value: any) => {
      if (value === 'invalid value') {
        return 'Invalid value provided'
      }
      return ''
    },
    value: 'valid value',
  }
  const result = validateSetting(item)
  expect(result).toBe('')
})
