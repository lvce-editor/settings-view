import { test, expect } from '@jest/globals'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleSettingInput } from '../src/parts/HandleSettingInput/HandleSettingInput.ts'
import { User } from '../src/parts/InputSource/InputSource.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('handleSettingInput converts string to number for number-type settings', () => {
  const numberSetting: SettingItem = {
    id: 'editor.fontSize',
    heading: 'Font Size',
    description: 'Font size',
    type: SettingItemType.Number,
    value: 15,
    category: 'editor',
  }

  const state: SettingsState = {
    ...createDefaultState(),
    items: [numberSetting],
  }

  const result = handleSettingInput(state, 'editor.fontSize', '20', User)

  expect(result.preferences['editor.fontSize']).toBe(20)
  expect(typeof result.preferences['editor.fontSize']).toBe('number')
})

test('handleSettingInput keeps string values for string-type settings', () => {
  const stringSetting: SettingItem = {
    id: 'editor.fontFamily',
    heading: 'Font Family',
    description: 'Font family',
    type: SettingItemType.String,
    value: 'Fira Code',
    category: 'editor',
  }

  const state: SettingsState = {
    ...createDefaultState(),
    items: [stringSetting],
  }

  const result = handleSettingInput(state, 'editor.fontFamily', 'Consolas', User)

  expect(result.preferences['editor.fontFamily']).toBe('Consolas')
  expect(typeof result.preferences['editor.fontFamily']).toBe('string')
})

test('handleSettingInput handles empty string for number settings', () => {
  const numberSetting: SettingItem = {
    id: 'editor.fontSize',
    heading: 'Font Size',
    description: 'Font size',
    type: SettingItemType.Number,
    value: 15,
    category: 'editor',
  }

  const state: SettingsState = {
    ...createDefaultState(),
    items: [numberSetting],
  }

  const result = handleSettingInput(state, 'editor.fontSize', '', User)

  expect(result.preferences['editor.fontSize']).toBe('')
})

test('handleSettingInput handles non-existent setting', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    items: [],
  }

  const result = handleSettingInput(state, 'non.existent', 'test', User)

  expect(result.preferences['non.existent']).toBe('test')
  expect(typeof result.preferences['non.existent']).toBe('string')
})
