import { expect, test } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleInputBlur } from '../src/parts/HandleInputBlur/HandleInputBlur.ts'

test('handleInputBlur sets focus to None', () => {
  const state: SettingsState = createDefaultState()
  const result: SettingsState = handleInputBlur(state)

  expect(result.focus).toBe(FocusId.None)
  expect(result).not.toBe(state)
})

test('handleInputBlur preserves other state properties', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    focus: FocusId.SearchInput,
    height: 100,
    id: 42,
    searchValue: 'test',
  }
  const result: SettingsState = handleInputBlur(state)

  expect(result.focus).toBe(FocusId.None)
  expect(result.id).toBe(42)
  expect(result.searchValue).toBe('test')
  expect(result.height).toBe(100)
  expect(result).not.toBe(state)
})

test('handleInputBlur works with SearchInput focus', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    focus: FocusId.SearchInput,
  }
  const result: SettingsState = handleInputBlur(state)

  expect(result.focus).toBe(FocusId.None)
  expect(result).not.toBe(state)
})

test('handleInputBlur works with ClearButton focus', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    focus: FocusId.ClearButton,
  }
  const result: SettingsState = handleInputBlur(state)

  expect(result.focus).toBe(FocusId.None)
  expect(result).not.toBe(state)
})

test('handleInputBlur works when focus is already None', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    focus: FocusId.None,
  }
  const result: SettingsState = handleInputBlur(state)

  expect(result.focus).toBe(FocusId.None)
  expect(result).not.toBe(state)
})

test('handleInputBlur preserves all state properties', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    deltaY: 50,
    focus: FocusId.SearchInput,
    height: 800,
    history: ['prev1', 'prev2'],
    historyIndex: 1,
    id: 5,
    scrollOffset: 100,
    searchValue: 'search term',
    width: 1200,
  }
  const result: SettingsState = handleInputBlur(state)

  expect(result.focus).toBe(FocusId.None)
  expect(result.id).toBe(5)
  expect(result.searchValue).toBe('search term')
  expect(result.height).toBe(800)
  expect(result.width).toBe(1200)
  expect(result.scrollOffset).toBe(100)
  expect(result.deltaY).toBe(50)
  expect(result.history).toEqual(['prev1', 'prev2'])
  expect(result.historyIndex).toBe(1)
  expect(result).not.toBe(state)
})
