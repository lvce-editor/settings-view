import { expect, test } from '@jest/globals'
import { addToHistory } from '../src/parts/AddToHistory/AddToHistory.ts'

test('addToHistory adds new search value to empty history', () => {
  const history: readonly string[] = []
  const result = addToHistory(history, 'new search')

  expect(result.newHistory).toContain('new search')
  expect(result.newHistory).toHaveLength(1)
  expect(result.newHistoryIndex).toBe(0)
})

test('addToHistory adds new search value to existing history', () => {
  const history: readonly string[] = ['search1', 'search2']
  const result = addToHistory(history, 'new search')

  expect(result.newHistory).toContain('new search')
  expect(result.newHistory).toHaveLength(3)
  expect(result.newHistoryIndex).toBe(2)
})

test('addToHistory does not add empty search value', () => {
  const history: readonly string[] = ['search1']
  const result = addToHistory(history, '')

  expect(result.newHistory).toHaveLength(1)
  expect(result.newHistoryIndex).toBe(-1)
})

test('addToHistory does not add whitespace-only search value', () => {
  const history: readonly string[] = ['search1']
  const result = addToHistory(history, '   ')

  expect(result.newHistory).toHaveLength(1)
  expect(result.newHistoryIndex).toBe(-1)
})

test('addToHistory does not add duplicate search value', () => {
  const history: readonly string[] = ['search1', 'search2']
  const result = addToHistory(history, 'search1')

  expect(result.newHistory).toHaveLength(2)
  expect(result.newHistoryIndex).toBe(0)
})

test('addToHistory finds index of existing search value', () => {
  const history: readonly string[] = ['search1', 'search2', 'search3']
  const result = addToHistory(history, 'search2')

  expect(result.newHistory).toHaveLength(3)
  expect(result.newHistoryIndex).toBe(1)
})

test('addToHistory handles null value', () => {
  const history: readonly string[] = ['search1']
  const result = addToHistory(history, null as any)

  expect(result.newHistory).toHaveLength(1)
  expect(result.newHistoryIndex).toBe(-1)
})

test('addToHistory handles undefined value', () => {
  const history: readonly string[] = ['search1']
  const result = addToHistory(history, undefined as any)

  expect(result.newHistory).toHaveLength(1)
  expect(result.newHistoryIndex).toBe(-1)
})
