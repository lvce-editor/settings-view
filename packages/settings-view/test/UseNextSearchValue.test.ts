import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import { useNextSearchValue } from '../src/parts/UseNextSearchValue/UseNextSearchValue.ts'

test('useNextSearchValue returns same state when history is empty', () => {
  const state = createDefaultState()
  const result = useNextSearchValue(state)
  expect(result).toBe(state)
})

test('useNextSearchValue returns same state when historyIndex is at end', () => {
  const state = createDefaultState()
  const stateWithHistory = {
    ...state,
    history: ['search1', 'search2'],
    historyIndex: 1,
  }
  const result = useNextSearchValue(stateWithHistory)
  expect(result).toBe(stateWithHistory)
})

test('useNextSearchValue navigates to next search value', () => {
  const state = createDefaultState()
  const stateWithHistory = {
    ...state,
    history: ['search1', 'search2', 'search3'],
    historyIndex: 0,
    items: [
      {
        category: InputName.TextEditorTab,
        description: 'The font size of the editor',
        heading: 'Font Size',
        id: 'fontSize',
        type: SettingItemType.Number,
        value: '15px',
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
  const result = useNextSearchValue(stateWithHistory)
  expect(result.searchValue).toBe('search2')
  expect(result.historyIndex).toBe(1)
  expect(result).not.toBe(stateWithHistory)
})

test('useNextSearchValue updates filtered items', () => {
  const state = createDefaultState()
  const stateWithHistory = {
    ...state,
    history: ['font', 'theme'],
    historyIndex: 0,
    items: [
      {
        category: InputName.TextEditorTab,
        description: 'The font size of the editor',
        heading: 'Font Size',
        id: 'fontSize',
        type: SettingItemType.Number,
        value: '15px',
      },
      {
        category: InputName.TextEditorTab,
        description: 'The color theme of the workbench',
        heading: 'Theme',
        id: 'theme',
        type: SettingItemType.String,
        value: 'Dark',
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
  const result = useNextSearchValue(stateWithHistory)
  expect(result.searchValue).toBe('theme')
  expect(result.filteredItems).toHaveLength(1)
  expect(result.filteredItems[0].id).toBe('theme')
})
