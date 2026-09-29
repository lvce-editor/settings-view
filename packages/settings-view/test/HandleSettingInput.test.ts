import { test, expect } from '@jest/globals'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleSettingInput } from '../src/parts/HandleSettingInput/HandleSettingInput.ts'
import { Script } from '../src/parts/InputSource/InputSource.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

const arraySetting: SettingItem = {
  category: 'features',
  description: 'Keyboard shortcuts handled by the simple browser',
  heading: 'Simple Browser Shortcuts',
  id: 'simpleBrowser.shortcuts',
  type: SettingItemType.Array,
  value: [],
}

test('handleSettingInput parses array settings from JSON', async () => {
  const state: SettingsState = {
    ...createDefaultState(),
    items: [arraySetting],
  }

  const result = await handleSettingInput(state, 'simpleBrowser.shortcuts', '["ctrl+p", "ctrl+b"]', Script)

  expect(result.preferences['simpleBrowser.shortcuts']).toEqual(['ctrl+p', 'ctrl+b'])
})

test.each(['invalid', '{}'])('handleSettingInput ignores invalid array value %s', async (value) => {
  const state: SettingsState = {
    ...createDefaultState(),
    items: [arraySetting],
  }

  const result = await handleSettingInput(state, 'simpleBrowser.shortcuts', value, Script)

  expect(result).toBe(state)
})

test('handleSettingInput converts string to number for number-type settings', async () => {
  const numberSetting: SettingItem = {
    category: 'editor',
    description: 'Font size',
    heading: 'Font Size',
    id: 'editor.fontSize',
    type: SettingItemType.Number,
    value: 15,
  }

  const state: SettingsState = {
    ...createDefaultState(),
    items: [numberSetting],
  }

  const result = await handleSettingInput(state, 'editor.fontSize', '20', Script)

  expect(result.preferences['editor.fontSize']).toBe(20)
  expect(result.modifiedSettings['editor.fontSize']).toBe(true)
  expect(typeof result.preferences['editor.fontSize']).toBe('number')
})

test('handleSettingInput keeps string values for string-type settings', async () => {
  const stringSetting: SettingItem = {
    category: 'editor',
    description: 'Font family',
    heading: 'Font Family',
    id: 'editor.fontFamily',
    type: SettingItemType.String,
    value: 'Fira Code',
  }

  const state: SettingsState = {
    ...createDefaultState(),
    items: [stringSetting],
  }

  const result = await handleSettingInput(state, 'editor.fontFamily', 'Consolas', Script)

  expect(result.preferences['editor.fontFamily']).toBe('Consolas')
  expect(typeof result.preferences['editor.fontFamily']).toBe('string')
})

test('handleSettingInput handles empty string for number settings', async () => {
  const numberSetting: SettingItem = {
    category: 'editor',
    description: 'Font size',
    heading: 'Font Size',
    id: 'editor.fontSize',
    type: SettingItemType.Number,
    value: 15,
  }

  const state: SettingsState = {
    ...createDefaultState(),
    items: [numberSetting],
  }

  const result = await handleSettingInput(state, 'editor.fontSize', '', Script)

  expect(result.preferences['editor.fontSize']).toBe('')
})

test('handleSettingInput handles non-existent setting', async () => {
  const state: SettingsState = {
    ...createDefaultState(),
    items: [],
  }

  const result = await handleSettingInput(state, 'non.existent', 'test', Script)

  expect(result.preferences['non.existent']).toBe('test')
  expect(typeof result.preferences['non.existent']).toBe('string')
})
