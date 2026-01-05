import { expect, test } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleInputBlur } from '../src/parts/HandleInputBlur/HandleInputBlur.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'

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
    id: 42,
    searchValue: 'test',
    height: 100,
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
    focus: FocusId.SearchInput,
    id: 5,
    searchValue: 'search term',
    height: 800,
    width: 1200,
    scrollOffset: 100,
    deltaY: 50,
    history: ['prev1', 'prev2'],
    historyIndex: 1,
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
