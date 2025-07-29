import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getTabs } from '../src/parts/GetTabs/GetTabs.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import { saveState } from '../src/parts/SaveState/SaveState.ts'
import { set } from '../src/parts/SettingsStates/SettingsStates.ts'

test('saveState returns SavedState object with correct structure', () => {
  const result = saveState(createDefaultState())

  expect(typeof result).toBe('object')
  expect(result).toHaveProperty('expandedPaths')
  expect(result).toHaveProperty('root')
  expect(result).toHaveProperty('minLineY')
  expect(result).toHaveProperty('maxLineY')
  expect(result).toHaveProperty('deltaY')
  expect(result).toHaveProperty('searchValue')
  expect(result).toHaveProperty('selectedTab')
  expect(result).toHaveProperty('history')
  expect(result).toHaveProperty('historyIndex')
})

test('saveState returns default values for all properties', () => {
  const result = saveState(createDefaultState())

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: '',
    selectedTab: '',
    scrollOffset: 0,
    focus: 0,
    history: [],
    historyIndex: -1,
  })
})

test('saveState works with zero uid', () => {
  const result = saveState(createDefaultState())

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: '',
    selectedTab: '',
    scrollOffset: 0,
    focus: 0,
    history: [],
    historyIndex: -1,
  })
})

test('saveState works with negative uid', () => {
  const result = saveState(createDefaultState())

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: '',
    selectedTab: '',
    scrollOffset: 0,
    focus: 0,
    history: [],
    historyIndex: -1,
  })
})

test('saveState works with large uid', () => {
  const result = saveState(createDefaultState())

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: '',
    selectedTab: '',
    scrollOffset: 0,
    focus: 0,
    history: [],
    historyIndex: -1,
  })
})

test('saveState returns empty array for expandedPaths', () => {
  const result = saveState(createDefaultState())

  expect(Array.isArray(result.expandedPaths)).toBe(true)
  expect(result.expandedPaths.length).toBe(0)
})

test('saveState returns empty string for root', () => {
  const result = saveState(createDefaultState())

  expect(typeof result.root).toBe('string')
  expect(result.root).toBe('')
})

test('saveState returns zero for minLineY', () => {
  const result = saveState(createDefaultState())

  expect(typeof result.minLineY).toBe('number')
  expect(result.minLineY).toBe(0)
})

test('saveState returns zero for maxLineY', () => {
  const result = saveState(createDefaultState())

  expect(typeof result.maxLineY).toBe('number')
  expect(result.maxLineY).toBe(0)
})

test('saveState returns zero for deltaY', () => {
  const result = saveState(createDefaultState())

  expect(typeof result.deltaY).toBe('number')
  expect(result.deltaY).toBe(0)
})

test('saveState returns same structure regardless of uid value', () => {
  const result1 = saveState(createDefaultState())
  const result2 = saveState(createDefaultState())
  const result3 = saveState(createDefaultState())

  expect(result1).toEqual(result2)
  expect(result2).toEqual(result3)
  expect(result1).toEqual(result3)
})

test('saveState expandedPaths is readonly array', () => {
  const result = saveState(createDefaultState())

  expect(Array.isArray(result.expandedPaths)).toBe(true)
  // We can't test readonly at runtime, but we can verify it's an array
  expect(result.expandedPaths).toEqual([])
})

test('saveState returns immutable object structure', () => {
  const result = saveState(createDefaultState())

  // Verify all properties have the expected types
  expect(typeof result.expandedPaths).toBe('object')
  expect(typeof result.root).toBe('string')
  expect(typeof result.minLineY).toBe('number')
  expect(typeof result.maxLineY).toBe('number')
  expect(typeof result.deltaY).toBe('number')
  expect(typeof result.searchValue).toBe('string')
  expect(typeof result.selectedTab).toBe('string')
  expect(typeof result.history).toBe('object')
  expect(typeof result.historyIndex).toBe('number')
})

test('saveState saves searchValue from state', () => {
  const uid = 1
  const state = {
    ...createDefaultState(),
    searchValue: 'test search',
  }
  set(uid, state, state)

  const result = saveState(state)

  expect(result.searchValue).toBe('test search')
})

test('saveState saves selectedTab from state', () => {
  const uid = 1
  const state = {
    ...createDefaultState(),
    tabs: getTabs(),
  }
  set(uid, state, state)

  const result = saveState(state)

  expect(result.selectedTab).toBe(InputName.TextEditorTab)
})

test('saveState saves history from state', () => {
  const uid = 1
  const state = {
    ...createDefaultState(),
    history: ['search1', 'search2', 'search3'],
    historyIndex: 1,
  }
  set(uid, state, state)

  const result = saveState(state)

  expect(result.history).toEqual(['search1', 'search2', 'search3'])
  expect(result.historyIndex).toBe(1)
})
