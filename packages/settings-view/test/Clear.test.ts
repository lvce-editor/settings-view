import { expect, test } from '@jest/globals'
import { clear } from '../src/parts/Clear/Clear.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('clear resets searchValue to empty string', () => {
  const state = createDefaultState()
  const stateWithSearch = {
    ...state,
    searchValue: 'some search term',
  }

  const result = clear(stateWithSearch)

  expect(result.searchValue).toBe('')
  expect(result).not.toBe(stateWithSearch)
})

test('clear resets searchValue when already empty', () => {
  const state = createDefaultState()
  const result = clear(state)

  expect(result.searchValue).toBe('')
  expect(result).not.toBe(state)
})

test('clear resets searchValue with long search term', () => {
  const state = createDefaultState()
  const stateWithLongSearch = {
    ...state,
    searchValue: 'this is a very long search term with many words and special characters & < > " \'',
  }

  const result = clear(stateWithLongSearch)

  expect(result.searchValue).toBe('')
  expect(result).not.toBe(stateWithLongSearch)
})

test('clear preserves other state properties', () => {
  const state = createDefaultState()
  const stateWithCustomValues = {
    ...state,
    searchValue: 'test search',
    focus: 42,
    height: 100,
    tabs: [{ label: 'Test Tab', selected: true }],
  }

  const result = clear(stateWithCustomValues)

  expect(result.searchValue).toBe('')
  expect(result.focus).toBe(42)
  expect(result.height).toBe(100)
  expect(result.tabs).toEqual([{ label: 'Test Tab', selected: true }])
  expect(result).not.toBe(stateWithCustomValues)
})

test('clear handles state with special characters in search value', () => {
  const state = createDefaultState()
  const stateWithSpecialChars = {
    ...state,
    searchValue: 'search with & < > " \' chars',
  }

  const result = clear(stateWithSpecialChars)

  expect(result.searchValue).toBe('')
  expect(result).not.toBe(stateWithSpecialChars)
})

test('clear handles state with numeric search value', () => {
  const state = createDefaultState()
  const stateWithNumericSearch = {
    ...state,
    searchValue: '12345',
  }

  const result = clear(stateWithNumericSearch)

  expect(result.searchValue).toBe('')
  expect(result).not.toBe(stateWithNumericSearch)
})
