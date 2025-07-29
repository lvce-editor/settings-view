import { test, expect } from '@jest/globals'
import type { ModifiedSettings } from '../src/parts/ModifiedSettings/ModifiedSettings.ts'
import { getNewModifiedSettings } from '../src/parts/GetNewModifiedSettings/GetNewModifiedSettings.ts'

test('getNewModifiedSettings returns same object when name already exists', () => {
  const modifiedSettings: ModifiedSettings = {
    setting1: true,
    setting2: false,
  }
  const result = getNewModifiedSettings(modifiedSettings, 'setting1')
  expect(result).toBe(modifiedSettings)
})

test('getNewModifiedSettings adds new name when it does not exist', () => {
  const modifiedSettings: ModifiedSettings = {
    setting1: true,
    setting2: false,
  }
  const result = getNewModifiedSettings(modifiedSettings, 'setting3')
  expect(result).toEqual({
    setting1: true,
    setting2: false,
    setting3: true,
  })
  expect(result).not.toBe(modifiedSettings)
})

test('getNewModifiedSettings works with empty object', () => {
  const modifiedSettings: ModifiedSettings = {}
  const result = getNewModifiedSettings(modifiedSettings, 'setting1')
  expect(result).toEqual({
    setting1: true,
  })
  expect(result).not.toBe(modifiedSettings)
})
