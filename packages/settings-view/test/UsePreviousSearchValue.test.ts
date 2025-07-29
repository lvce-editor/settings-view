import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import { usePreviousSearchValue } from '../src/parts/UsePreviousSearchValue/UsePreviousSearchValue.ts'

test('usePreviousSearchValue returns same state when history is empty', () => {
  const state = createDefaultState()
  const result = usePreviousSearchValue(state)
  expect(result).toBe(state)
})

test('usePreviousSearchValue returns same state when historyIndex is 0', () => {
  const state = createDefaultState()
  const stateWithHistory = {
    ...state,
    history: ['search1', 'search2'],
    historyIndex: 0,
  }
  const result = usePreviousSearchValue(stateWithHistory)
  expect(result).toBe(stateWithHistory)
})

test('usePreviousSearchValue navigates to previous search value', () => {
  const state = createDefaultState()
  const stateWithHistory = {
    ...state,
    history: ['search1', 'search2', 'search3'],
    historyIndex: 2,
    items: [
      {
        id: 'fontSize',
        heading: 'Font Size',
        description: 'The font size of the editor',
        type: SettingItemType.Number,
        value: '15px',
        category: InputName.TextEditorTab,
      },
    ],
    tabs: [
      {
        id: InputName.TextEditorTab,
        label: 'Text Editor',
        selected: true,
      },
    ],
  }
  const result = usePreviousSearchValue(stateWithHistory)
  expect(result.searchValue).toBe('search2')
  expect(result.historyIndex).toBe(1)
  expect(result).not.toBe(stateWithHistory)
})

test('usePreviousSearchValue updates filtered items', () => {
  const state = createDefaultState()
  const stateWithHistory = {
    ...state,
    history: ['font', 'theme'],
    historyIndex: 1,
    items: [
      {
        id: 'fontSize',
        heading: 'Font Size',
        description: 'The font size of the editor',
        type: SettingItemType.Number,
        value: '15px',
        category: InputName.TextEditorTab,
      },
      {
        id: 'theme',
        heading: 'Theme',
        description: 'The color theme of the workbench',
        type: SettingItemType.String,
        value: 'Dark',
        category: InputName.TextEditorTab,
      },
    ],
    tabs: [
      {
        id: InputName.TextEditorTab,
        label: 'Text Editor',
        selected: true,
      },
    ],
  }
  const result = usePreviousSearchValue(stateWithHistory)
  expect(result.searchValue).toBe('font')
  expect(result.filteredItems).toHaveLength(1)
  expect(result.filteredItems[0].id).toBe('fontSize')
})
