import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleInput } from '../src/parts/HandleInput/HandleInput.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('handleInput updates searchValue with empty string', () => {
  const state = createDefaultState()
  const result = handleInput(state, '')

  expect(result.searchValue).toBe('')
  expect(result).not.toBe(state)
})

test('handleInput updates searchValue with simple text', () => {
  const state = createDefaultState()
  const result = handleInput(state, 'test search')

  expect(result.searchValue).toBe('test search')
  expect(result).not.toBe(state)
})

test('handleInput updates searchValue with special characters', () => {
  const state = createDefaultState()
  const result = handleInput(state, 'search with & < > " \' chars')

  expect(result.searchValue).toBe('search with & < > " \' chars')
  expect(result).not.toBe(state)
})

test('handleInput updates searchValue with numbers', () => {
  const state = createDefaultState()
  const result = handleInput(state, 'search123')

  expect(result.searchValue).toBe('search123')
  expect(result).not.toBe(state)
})

test('handleInput preserves other state properties', () => {
  const state = createDefaultState()
  const stateWithCustomValues = {
    ...state,
    focus: 42,
    height: 100,
    searchValue: 'old value',
  }

  const result = handleInput(stateWithCustomValues, 'new search value')

  expect(result.searchValue).toBe('new search value')
  expect(result.focus).toBe(42)
  expect(result.height).toBe(100)
  expect(result).not.toBe(stateWithCustomValues)
})

test('handleInput handles undefined value', () => {
  const state = createDefaultState()
  const result = handleInput(state, undefined as any)

  expect(result.searchValue).toBe(undefined)
  expect(result).not.toBe(state)
})

test('handleInput handles null value', () => {
  const state = createDefaultState()
  const result = handleInput(state, null as any)

  expect(result.searchValue).toBe(null)
  expect(result).not.toBe(state)
})

test('handleInput updates filteredItems when search value changes', () => {
  const state = createDefaultState()
  const stateWithItems = {
    ...state,
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
        id: 'fontFamily',
        heading: 'Font Family',
        description: 'The font family of the editor',
        type: SettingItemType.String,
        value: 'Monaco',
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

  const result = handleInput(stateWithItems, 'font')

  expect(result.searchValue).toBe('font')
  expect(result.filteredItems).toHaveLength(2)
  expect(result.filteredItems[0].id).toBe('fontSize')
  expect(result.filteredItems[1].id).toBe('fontFamily')
})

test('handleInput clears filteredItems when search value is empty', () => {
  const state = createDefaultState()
  const stateWithItems = {
    ...state,
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

  const result = handleInput(stateWithItems, '')

  expect(result.searchValue).toBe('')
  expect(result.filteredItems).toHaveLength(2)
})
