import { expect, test } from '@jest/globals'
import { addToHistory } from '../src/parts/AddToHistory/AddToHistory.ts'

test('addToHistory adds new search value to empty history', () => {
  const history: readonly string[] = []
  const result = addToHistory(history, 'new search')

  expect(result).toEqual({
    newHistory: ['new search'],
    newHistoryIndex: 0,
  })
})

test('addToHistory adds new search value to existing history', () => {
  const history: readonly string[] = ['search1', 'search2']
  const result = addToHistory(history, 'new search')

  expect(result).toEqual({
    newHistory: ['search1', 'search2', 'new search'],
    newHistoryIndex: 2,
  })
})

test('addToHistory does not add empty search value', () => {
  const history: readonly string[] = ['search1']
  const result = addToHistory(history, '')

  expect(result).toEqual({
    newHistory: ['search1'],
    newHistoryIndex: -1,
  })
})

test('addToHistory does not add whitespace-only search value', () => {
  const history: readonly string[] = ['search1']
  const result = addToHistory(history, '   ')

  expect(result).toEqual({
    newHistory: ['search1'],
    newHistoryIndex: -1,
  })
})

test('addToHistory does not add duplicate search value', () => {
  const history: readonly string[] = ['search1', 'search2']
  const result = addToHistory(history, 'search1')

  expect(result).toEqual({
    newHistory: ['search1', 'search2'],
    newHistoryIndex: 0,
  })
})

test('addToHistory finds index of existing search value', () => {
  const history: readonly string[] = ['search1', 'search2', 'search3']
  const result = addToHistory(history, 'search2')

  expect(result).toEqual({
    newHistory: ['search1', 'search2', 'search3'],
    newHistoryIndex: 1,
  })
})

test('addToHistory does not add prefix of existing history item', () => {
  const history: readonly string[] = ['fontSize', 'theme']
  const result = addToHistory(history, 'font')

  expect(result).toEqual({
    newHistory: ['fontSize', 'theme'],
    newHistoryIndex: 0,
  })
})

test('addToHistory replaces prefix item with complete value', () => {
  const history: readonly string[] = ['font', 'theme']
  const result = addToHistory(history, 'fontSize')

  expect(result).toEqual({
    newHistory: ['fontSize', 'theme'],
    newHistoryIndex: 0,
  })
})

test('addToHistory handles multiple prefix replacements', () => {
  const history: readonly string[] = ['f', 'fo', 'font', 'theme']
  const result = addToHistory(history, 'fontSize')

  expect(result).toEqual({
    newHistory: ['fontSize', 'theme'],
    newHistoryIndex: 0,
  })
})

test('addToHistory trims whitespace from input', () => {
  const history: readonly string[] = []
  const result = addToHistory(history, '  search value  ')

  expect(result).toEqual({
    newHistory: ['search value'],
    newHistoryIndex: 0,
  })
})

test('addToHistory simulates user typing letter by letter', () => {
  // Simulate user typing "font" letter by letter, then "theme"
  let history: readonly string[] = []

  // User types 'f'
  let result = addToHistory(history, 'f')
  expect(result).toEqual({
    newHistory: ['f'],
    newHistoryIndex: 0,
  })
  history = result.newHistory

  // User types 'fo'
  result = addToHistory(history, 'fo')
  expect(result).toEqual({
    newHistory: ['fo'],
    newHistoryIndex: 0,
  })
  history = result.newHistory

  // User types 'fon'
  result = addToHistory(history, 'fon')
  expect(result).toEqual({
    newHistory: ['fon'],
    newHistoryIndex: 0,
  })
  history = result.newHistory

  // User types 'font'
  result = addToHistory(history, 'font')
  expect(result).toEqual({
    newHistory: ['font'],
    newHistoryIndex: 0,
  })
  history = result.newHistory

  // User types 'theme' (different search)
  result = addToHistory(history, 'theme')
  expect(result).toEqual({
    newHistory: ['font', 'theme'],
    newHistoryIndex: 1,
  })
  history = result.newHistory

  // User types 'font' again (should find existing)
  result = addToHistory(history, 'font')
  expect(result).toEqual({
    newHistory: ['font', 'theme'],
    newHistoryIndex: 0,
  })
})
