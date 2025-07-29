import { test, expect } from '@jest/globals'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import { validateSetting } from '../src/parts/ValidateSetting/ValidateSetting.ts'

test('validateSetting returns empty string when no validate function is provided', () => {
  const item: SettingItem = {
    id: 'test',
    heading: 'Test Setting',
    description: 'Test description',
    type: 2,
    value: 'test value',
    category: 'test',
  }
  const result = validateSetting(item)
  expect(result).toBe('')
})

test('validateSetting returns error message when validate function returns error', () => {
  const item: SettingItem = {
    id: 'test',
    heading: 'Test Setting',
    description: 'Test description',
    type: 2,
    value: 'invalid value',
    category: 'test',
    validate: (value: any) => {
      if (value === 'invalid value') {
        return 'Invalid value provided'
      }
      return ''
    },
  }
  const result = validateSetting(item)
  expect(result).toBe('Invalid value provided')
})

test('validateSetting returns empty string when validate function returns empty string', () => {
  const item: SettingItem = {
    id: 'test',
    heading: 'Test Setting',
    description: 'Test description',
    type: 2,
    value: 'valid value',
    category: 'test',
    validate: (value: any) => {
      if (value === 'invalid value') {
        return 'Invalid value provided'
      }
      return ''
    },
  }
  const result = validateSetting(item)
  expect(result).toBe('')
})
