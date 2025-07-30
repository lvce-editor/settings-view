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
    id: 1,
    filteredItems: [
      {
        id: 'fontSize',
        heading: 'Font Size',
        description: 'Font size description',
        type: SettingItemType.Number,
        value: '15',
        category: 'editor',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
      {
        id: 'tabSize',
        heading: 'Tab Size',
        description: 'Tab size description',
        type: SettingItemType.Number,
        value: '4',
        category: 'editor',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
      {
        id: 'wordWrap',
        heading: 'Word Wrap',
        description: 'Word wrap description',
        type: SettingItemType.Boolean,
        value: 'true',
        category: 'editor',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
    ],
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
    id: 1,
    filteredItems: [
      {
        id: 'wordWrap',
        heading: 'Word Wrap',
        description: 'Word wrap description',
        type: SettingItemType.Boolean,
        value: 'true',
        category: 'editor',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
      {
        id: 'enableMinimap',
        heading: 'Enable Minimap',
        description: 'Enable minimap description',
        type: SettingItemType.Boolean,
        value: 'false',
        category: 'editor',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
    ],
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, []])
})

test.skip('renderSettingValues handles empty filteredItems', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 1,
    filteredItems: [],
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, []])
})

test.skip('renderSettingValues handles mixed setting types', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 1,
    filteredItems: [
      {
        id: 'fontSize',
        heading: 'Font Size',
        description: 'Font size description',
        type: SettingItemType.Number,
        value: '12',
        category: 'editor',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
      {
        id: 'theme',
        heading: 'Theme',
        description: 'Theme description',
        type: SettingItemType.String,
        value: 'light',
        category: 'editor',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
      {
        id: 'lineHeight',
        heading: 'Line Height',
        description: 'Line height description',
        type: SettingItemType.Number,
        value: '1.5',
        category: 'editor',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
      {
        id: 'enableMinimap',
        heading: 'Enable Minimap',
        description: 'Enable minimap description',
        type: SettingItemType.Boolean,
        value: 'false',
        category: 'editor',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
    ],
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
