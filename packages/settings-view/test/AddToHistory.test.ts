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

test('addToHistory does not add prefix of existing history item', () => {
  const history: readonly string[] = ['fontSize', 'theme']
  const result = addToHistory(history, 'font')

  expect(result.newHistory).toHaveLength(2)
  expect(result.newHistoryIndex).toBe(0) // Should point to 'fontSize'
})

test('addToHistory replaces prefix item with complete value', () => {
  const history: readonly string[] = ['font', 'theme']
  const result = addToHistory(history, 'fontSize')

  expect(result.newHistory).toHaveLength(2)
  expect(result.newHistory).toContain('fontSize')
  expect(result.newHistory).not.toContain('font')
  expect(result.newHistoryIndex).toBe(0)
})

test('addToHistory handles multiple prefix replacements', () => {
  const history: readonly string[] = ['f', 'fo', 'font', 'theme']
  const result = addToHistory(history, 'fontSize')

  expect(result.newHistory).toHaveLength(2)
  expect(result.newHistory).toContain('fontSize')
  expect(result.newHistory).toContain('theme')
  expect(result.newHistory).not.toContain('f')
  expect(result.newHistory).not.toContain('fo')
  expect(result.newHistory).not.toContain('font')
  expect(result.newHistoryIndex).toBe(0)
})

test('addToHistory trims whitespace from input', () => {
  const history: readonly string[] = []
  const result = addToHistory(history, '  search value  ')

  expect(result.newHistory).toContain('search value')
  expect(result.newHistory).toHaveLength(1)
  expect(result.newHistoryIndex).toBe(0)
})

test('addToHistory simulates user typing letter by letter', () => {
  // Simulate user typing "font" letter by letter, then "theme"
  let history: readonly string[] = []

  // User types 'f'
  let result = addToHistory(history, 'f')
  history = result.newHistory
  expect(history).toHaveLength(1)
  expect(history).toContain('f')

  // User types 'fo'
  result = addToHistory(history, 'fo')
  history = result.newHistory
  expect(history).toHaveLength(1)
  expect(history).toContain('fo')
  expect(history).not.toContain('f')

  // User types 'fon'
  result = addToHistory(history, 'fon')
  history = result.newHistory
  expect(history).toHaveLength(1)
  expect(history).toContain('fon')
  expect(history).not.toContain('fo')

  // User types 'font'
  result = addToHistory(history, 'font')
  history = result.newHistory
  expect(history).toHaveLength(1)
  expect(history).toContain('font')
  expect(history).not.toContain('fon')

  // User types 'theme' (different search)
  result = addToHistory(history, 'theme')
  history = result.newHistory
  expect(history).toHaveLength(2)
  expect(history).toContain('font')
  expect(history).toContain('theme')

  // User types 'font' again (should find existing)
  result = addToHistory(history, 'font')
  history = result.newHistory
  expect(history).toHaveLength(2)
  expect(result.newHistoryIndex).toBe(0) // Should point to 'font'
})
