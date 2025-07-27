import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleInput } from '../src/parts/HandleInput/HandleInput.ts'

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