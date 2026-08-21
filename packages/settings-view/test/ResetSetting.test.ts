import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { Script } from '../src/parts/InputSource/InputSource.ts'
import { resetSetting } from '../src/parts/ResetSetting/ResetSetting.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('resetSetting restores the default value and modified status', () => {
  const item = {
    category: 'editor',
    description: 'The font size of the editor',
    heading: 'Font Size',
    id: 'editor.fontSize',
    type: SettingItemType.Number,
    value: 15,
  }
  const state = {
    ...createDefaultState(),
    filteredItems: [
      {
        ...item,
        errorMessage: '',
        hasError: false,
        modified: true,
      },
    ],
    items: [item],
    modifiedSettings: { 'editor.fontSize': true },
    preferences: { 'editor.fontSize': 20 },
  }

  const result = resetSetting(state, 'editor.fontSize')

  expect(result.preferences).toEqual({})
  expect(result.modifiedSettings).toEqual({})
  expect(result.filteredItems[0]).toMatchObject({ id: 'editor.fontSize', modified: false, value: 15 })
  expect(result.inputSource).toBe(Script)
})

test('resetSetting preserves other modified settings', () => {
  const state = {
    ...createDefaultState(),
    modifiedSettings: { 'editor.fontFamily': true, 'editor.fontSize': true },
    preferences: { 'editor.fontFamily': 'Fira Code', 'editor.fontSize': 20 },
  }

  const result = resetSetting(state, 'editor.fontSize')

  expect(result.preferences).toEqual({ 'editor.fontFamily': 'Fira Code' })
  expect(result.modifiedSettings).toEqual({ 'editor.fontFamily': true })
})

test('resetSetting returns the same state for an unmodified setting', () => {
  const state = createDefaultState()

  const result = resetSetting(state, 'editor.fontSize')

  expect(result).toBe(state)
})
