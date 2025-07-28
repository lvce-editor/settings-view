import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../src/parts/ViewletCommand/ViewletCommand.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderSettingValues } from '../src/parts/RenderSettingValues/RenderSettingValues.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('renderSettingValues returns correct ViewletCommand for numeric settings', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        id: 'fontSize',
        heading: 'Font Size',
        description: 'Font size description',
        type: SettingItemType.Number,
        value: '15',
        category: 'editor',
      },
      {
        id: 'tabSize',
        heading: 'Tab Size',
        description: 'Tab size description',
        type: SettingItemType.Number,
        value: '4',
        category: 'editor',
      },
      {
        id: 'wordWrap',
        heading: 'Word Wrap',
        description: 'Word wrap description',
        type: SettingItemType.Boolean,
        value: 'true',
        category: 'editor',
      },
    ],
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual([
    'Viewlet.setInputValues',
    [
      { name: 'fontSize', value: '15' },
      { name: 'tabSize', value: '4' },
    ],
  ])
})

test('renderSettingValues returns empty array when no numeric settings', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        id: 'wordWrap',
        heading: 'Word Wrap',
        description: 'Word wrap description',
        type: SettingItemType.Boolean,
        value: 'true',
        category: 'editor',
      },
      {
        id: 'theme',
        heading: 'Theme',
        description: 'Theme description',
        type: SettingItemType.String,
        value: 'dark',
        category: 'editor',
      },
    ],
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', []])
})

test('renderSettingValues handles empty filteredItems', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [],
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', []])
})

test('renderSettingValues handles mixed setting types', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        id: 'fontSize',
        heading: 'Font Size',
        description: 'Font size description',
        type: SettingItemType.Number,
        value: '12',
        category: 'editor',
      },
      {
        id: 'theme',
        heading: 'Theme',
        description: 'Theme description',
        type: SettingItemType.String,
        value: 'light',
        category: 'editor',
      },
      {
        id: 'lineHeight',
        heading: 'Line Height',
        description: 'Line height description',
        type: SettingItemType.Number,
        value: '1.5',
        category: 'editor',
      },
      {
        id: 'enableMinimap',
        heading: 'Enable Minimap',
        description: 'Enable minimap description',
        type: SettingItemType.Boolean,
        value: 'false',
        category: 'editor',
      },
    ],
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual([
    'Viewlet.setInputValues',
    [
      { name: 'fontSize', value: '12' },
      { name: 'lineHeight', value: '1.5' },
    ],
  ])
})
