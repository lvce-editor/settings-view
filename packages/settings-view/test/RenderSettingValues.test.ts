import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../src/parts/ViewletCommand/ViewletCommand.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderSettingValues } from '../src/parts/RenderSettingValues/RenderSettingValues.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test.skip('renderSettingValues returns correct ViewletCommand for numeric and string settings', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'editor',
        description: 'Font size description',
        errorMessage: '',
        hasError: false,
        heading: 'Font Size',
        id: 'fontSize',
        modified: false,
        type: SettingItemType.Number,
        value: '15',
      },
      {
        category: 'editor',
        description: 'Tab size description',
        errorMessage: '',
        hasError: false,
        heading: 'Tab Size',
        id: 'tabSize',
        modified: false,
        type: SettingItemType.Number,
        value: '4',
      },
      {
        category: 'editor',
        description: 'Word wrap description',
        errorMessage: '',
        hasError: false,
        heading: 'Word Wrap',
        id: 'wordWrap',
        modified: false,
        type: SettingItemType.Boolean,
        value: 'true',
      },
    ],
    id: 1,
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual([
    'Viewlet.setInputValues',
    1,
    [
      { name: 'fontSize', value: '15' },
      { name: 'tabSize', value: '4' },
    ],
  ])
})

test.skip('renderSettingValues returns empty array when no numeric or string settings', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'editor',
        description: 'Word wrap description',
        errorMessage: '',
        hasError: false,
        heading: 'Word Wrap',
        id: 'wordWrap',
        modified: false,
        type: SettingItemType.Boolean,
        value: 'true',
      },
      {
        category: 'editor',
        description: 'Enable minimap description',
        errorMessage: '',
        hasError: false,
        heading: 'Enable Minimap',
        id: 'enableMinimap',
        modified: false,
        type: SettingItemType.Boolean,
        value: 'false',
      },
    ],
    id: 1,
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, []])
})

test.skip('renderSettingValues handles empty filteredItems', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [],
    id: 1,
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, []])
})

test.skip('renderSettingValues handles mixed setting types', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'editor',
        description: 'Font size description',
        errorMessage: '',
        hasError: false,
        heading: 'Font Size',
        id: 'fontSize',
        modified: false,
        type: SettingItemType.Number,
        value: '12',
      },
      {
        category: 'editor',
        description: 'Theme description',
        errorMessage: '',
        hasError: false,
        heading: 'Theme',
        id: 'theme',
        modified: false,
        type: SettingItemType.String,
        value: 'light',
      },
      {
        category: 'editor',
        description: 'Line height description',
        errorMessage: '',
        hasError: false,
        heading: 'Line Height',
        id: 'lineHeight',
        modified: false,
        type: SettingItemType.Number,
        value: '1.5',
      },
      {
        category: 'editor',
        description: 'Enable minimap description',
        errorMessage: '',
        hasError: false,
        heading: 'Enable Minimap',
        id: 'enableMinimap',
        modified: false,
        type: SettingItemType.Boolean,
        value: 'false',
      },
    ],
    id: 1,
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual([
    'Viewlet.setInputValues',
    1,
    [
      { name: 'fontSize', value: '12' },
      { name: 'theme', value: 'light' },
      { name: 'lineHeight', value: '1.5' },
    ],
  ])
})
