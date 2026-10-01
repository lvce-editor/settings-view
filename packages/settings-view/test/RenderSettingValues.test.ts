import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../src/parts/ViewletCommand/ViewletCommand.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { User } from '../src/parts/InputSource/InputSource.ts'
import { renderSettingValues } from '../src/parts/RenderSettingValues/RenderSettingValues.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('renderSettingValues serializes array values as JSON', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'features',
        description: 'Keyboard shortcuts handled by the simple browser',
        errorMessage: '',
        hasError: false,
        heading: 'Simple Browser Shortcuts',
        id: 'simpleBrowser.shortcuts',
        isModified: true,
        type: SettingItemType.Array,
        value: [],
      },
    ],
    id: 1,
    preferences: {
      'simpleBrowser.shortcuts': ['ctrl+p', 'ctrl+b'],
    },
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, [{ name: 'simpleBrowser.shortcuts', value: '["ctrl+p","ctrl+b"]' }]])
})

test('renderSettingValues serializes object values as JSON', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'git',
        description: 'Maps Git remote hosts to repository website base URLs',
        errorMessage: '',
        hasError: false,
        heading: 'Remote Hosts',
        id: 'git.remoteHosts',
        isModified: true,
        type: SettingItemType.Object,
        value: { 'github.com': 'https://github.com' },
      },
    ],
    id: 1,
    preferences: {
      'git.remoteHosts': { 'github.com': 'https://example.com' },
    },
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, [{ name: 'git.remoteHosts', value: '{"github.com":"https://example.com"}' }]])
})

test('renderSettingValues applies the persisted value to enum controls', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'workbench',
        description: 'Controls the location of the side bar',
        errorMessage: '',
        hasError: false,
        heading: 'Side Bar Location',
        id: 'workbench.sideBarLocation',
        isModified: true,
        options: [
          { id: 'left', label: 'Left' },
          { id: 'right', label: 'Right' },
        ],
        type: SettingItemType.Enum,
        value: 'right',
      },
    ],
    id: 1,
    preferences: {
      'workbench.sideBarLocation': 'left',
    },
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, [{ name: 'workbench.sideBarLocation', value: 'left' }]])
})

test('renderSettingValues maps legacy namespaced enum values to current option ids', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'text-editor',
        description: 'Controls the display of line numbers',
        errorMessage: '',
        hasError: false,
        heading: 'Line Numbers',
        id: 'editor.lineNumbers',
        isModified: true,
        options: [
          { id: 'on', label: 'On' },
          { id: 'off', label: 'off' },
        ],
        type: SettingItemType.Enum,
        value: 'on',
      },
    ],
    id: 1,
    preferences: {
      'editor.lineNumbers': 'editor.off',
    },
  }

  const result = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, [{ name: 'editor.lineNumbers', value: 'off' }]])
})

test('renderSettingValues keeps an empty number preference blank', () => {
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
        id: 'editor.fontSize',
        isModified: true,
        type: SettingItemType.Number,
        value: 15,
      },
    ],
    id: 1,
    preferences: {
      'editor.fontSize': '',
    },
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, [{ name: 'editor.fontSize', value: '' }]])
})

test('renderSettingValues uses item values only for missing preferences', () => {
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
        id: 'editor.fontSize',
        isModified: true,
        type: SettingItemType.Number,
        value: 15,
      },
      {
        category: 'editor',
        description: 'Letter spacing description',
        errorMessage: '',
        hasError: false,
        heading: 'Letter Spacing',
        id: 'editor.letterSpacing',
        isModified: false,
        type: SettingItemType.Number,
        value: 1,
      },
    ],
    id: 1,
    preferences: {
      'editor.fontSize': 0,
    },
  }

  const result: ViewletCommand = renderSettingValues(oldState, newState)

  expect(result).toEqual([
    'Viewlet.setInputValues',
    1,
    [
      { name: 'editor.fontSize', value: 0 },
      { name: 'editor.letterSpacing', value: 1 },
    ],
  ])
})

test('renderSettingValues does not reset a color input changed by the user', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'editor',
        description: 'Editor background description',
        errorMessage: '',
        hasError: false,
        heading: 'Editor background',
        id: 'editor.background',
        isModified: false,
        type: SettingItemType.Color,
        value: '#000000',
      },
    ],
    preferences: {
      'editor.background': '#000000',
    },
  }
  const newState: SettingsState = {
    ...oldState,
    inputSource: User,
    modifiedSettings: {
      'editor.background': true,
    },
    preferences: {
      'editor.background': '#ffffff',
    },
  }

  const result = renderSettingValues(oldState, newState)

  expect(result).toEqual(['Viewlet.setInputValues', 1, []])
})

test('renderSettingValues initializes a color input when its value did not change', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'editor',
        description: 'Editor background description',
        errorMessage: '',
        hasError: false,
        heading: 'Editor background',
        id: 'editor.background',
        isModified: false,
        type: SettingItemType.Color,
        value: '#000000',
      },
    ],
    inputSource: User,
    preferences: {
      'editor.background': '#ffffff',
    },
  }

  const result = renderSettingValues(state, state)

  expect(result).toEqual(['Viewlet.setInputValues', 1, [{ name: 'editor.background', value: '#ffffff' }]])
})

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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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
