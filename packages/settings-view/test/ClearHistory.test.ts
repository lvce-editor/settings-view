import { expect, test } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { clearHistory } from '../src/parts/ClearHistory/ClearHistory.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('clearHistory sets history to empty array', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    history: ['search1', 'search2', 'search3'],
    historyIndex: 1,
  }

  const result: SettingsState = clearHistory(state)

  expect(result.history).toEqual([])
  expect(result.history).toHaveLength(0)
})

test('clearHistory sets historyIndex to -1', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    history: ['search1', 'search2'],
    historyIndex: 0,
  }

  const result: SettingsState = clearHistory(state)

  expect(result.historyIndex).toBe(-1)
})

test('clearHistory clears history when already empty', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    history: [],
    historyIndex: -1,
  }

  const result: SettingsState = clearHistory(state)

  expect(result.history).toEqual([])
  expect(result.historyIndex).toBe(-1)
})

test('clearHistory preserves other state properties', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    focus: 42,
    height: 100,
    history: ['search1', 'search2'],
    historyIndex: 1,
    id: 5,
    searchValue: 'test search',
  }

  const result: SettingsState = clearHistory(state)

  expect(result.history).toEqual([])
  expect(result.historyIndex).toBe(-1)
  expect(result.focus).toBe(42)
  expect(result.height).toBe(100)
  expect(result.searchValue).toBe('test search')
  expect(result.id).toBe(5)
})

test('clearHistory handles state with single history item', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    history: ['single search'],
    historyIndex: 0,
  }

  const result: SettingsState = clearHistory(state)

  expect(result.history).toEqual([])
  expect(result.historyIndex).toBe(-1)
})

test('clearHistory handles state with historyIndex at end', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    history: ['search1', 'search2', 'search3'],
    historyIndex: 2,
  }

  const result: SettingsState = clearHistory(state)

  expect(result.history).toEqual([])
  expect(result.historyIndex).toBe(-1)
})

test('clearHistory handles state with historyIndex at beginning', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    history: ['search1', 'search2', 'search3'],
    historyIndex: 0,
  }

  const result: SettingsState = clearHistory(state)

  expect(result.history).toEqual([])
  expect(result.historyIndex).toBe(-1)
})

test('clearHistory returns new state object', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    history: ['search1'],
    historyIndex: 0,
  }

  const result: SettingsState = clearHistory(state)

  expect(result).not.toBe(state)
})

test('clearHistory handles state with many history items', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    history: ['search1', 'search2', 'search3', 'search4', 'search5', 'search6'],
    historyIndex: 3,
  }

  const result: SettingsState = clearHistory(state)

  expect(result.history).toEqual([])
  expect(result.historyIndex).toBe(-1)
})
