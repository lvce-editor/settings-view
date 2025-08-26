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

test('handleInput resets scroll to top when filtering', () => {
  const state = createDefaultState()
  const stateWithItems = {
    ...state,
    deltaY: 200,
    scrollOffset: 200,
    height: 100,
    itemHeight: 100,
    items: Array.from({ length: 50 }, (_, i) => ({
      id: `id-${i}`,
      heading: `Item ${i}`,
      description: `Desc ${i}`,
      type: SettingItemType.String,
      value: String(i),
      category: InputName.TextEditorTab,
    })),
    tabs: [
      {
        id: InputName.TextEditorTab,
        label: 'Text Editor',
        selected: true,
      },
    ],
  }

  const result = handleInput(stateWithItems, 'Item 1')

  expect(result.deltaY).toBe(0)
  expect(result.scrollOffset).toBe(0)
  expect(result.minLineY).toBe(0)
})

test('handleInput filters across all items, not only visible ones', () => {
  const state = createDefaultState()
  const stateWithItems = {
    ...state,
    height: 100,
    itemHeight: 100,
    items: Array.from({ length: 100 }, (_, i) => ({
      id: `id-${i}`,
      heading: `Category ${Math.floor(i / 10)} - Setting ${i}`,
      description: `Desc ${i}`,
      type: SettingItemType.String,
      value: String(i),
      category: InputName.TextEditorTab,
    })),
    tabs: [
      {
        id: InputName.TextEditorTab,
        label: 'Text Editor',
        selected: true,
      },
    ],
  }

  // Only first item is visible with height=100 & itemHeight=100, but we search for a high index
  const result = handleInput(stateWithItems, 'Setting 95')

  expect(result.filteredItems.some((x: any) => x.id === 'id-95')).toBe(true)
  expect(result.filteredItems.length).toBeGreaterThan(0)
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

test('handleInput adds new search value to history', () => {
  const state = createDefaultState()
  const result = handleInput(state, 'new search')

  expect(result.searchValue).toBe('new search')
  expect(result.history).toContain('new search')
  expect(result.historyIndex).toBe(0)
  expect(result).not.toBe(state)
})

test('handleInput does not add empty search value to history', () => {
  const state = createDefaultState()
  const result = handleInput(state, '')

  expect(result.searchValue).toBe('')
  expect(result.history).toHaveLength(0)
  expect(result.historyIndex).toBe(-1)
  expect(result).not.toBe(state)
})

test('handleInput does not add duplicate search value to history', () => {
  const state = createDefaultState()
  const stateWithHistory = {
    ...state,
    history: ['existing search'],
    historyIndex: 0,
  }
  const result = handleInput(stateWithHistory, 'existing search')

  expect(result.searchValue).toBe('existing search')
  expect(result.history).toHaveLength(1)
  expect(result.historyIndex).toBe(0)
  expect(result).not.toBe(stateWithHistory)
})

test('handleInput finds existing search value index in history', () => {
  const state = createDefaultState()
  const stateWithHistory = {
    ...state,
    history: ['search1', 'search2', 'search3'],
    historyIndex: 0,
  }
  const result = handleInput(stateWithHistory, 'search2')

  expect(result.searchValue).toBe('search2')
  expect(result.history).toHaveLength(3)
  expect(result.historyIndex).toBe(1)
  expect(result).not.toBe(stateWithHistory)
})
