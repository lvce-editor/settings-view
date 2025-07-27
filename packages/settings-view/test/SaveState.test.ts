import { test, expect } from '@jest/globals'
import { saveState } from '../src/parts/SaveState/SaveState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { get, set } from '../src/parts/SettingsStates/SettingsStates.ts'
import { getTabs } from '../src/parts/GetTabs/GetTabs.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('saveState returns SavedState object with correct structure', () => {
  const uid = 1
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(typeof result).toBe('object')
  expect(result).toHaveProperty('expandedPaths')
  expect(result).toHaveProperty('root')
  expect(result).toHaveProperty('minLineY')
  expect(result).toHaveProperty('maxLineY')
  expect(result).toHaveProperty('deltaY')
  expect(result).toHaveProperty('searchValue')
  expect(result).toHaveProperty('selectedTab')
})

test('saveState returns default values for all properties', () => {
  const uid = 123
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: '',
    selectedTab: '',
  })
})

test('saveState works with zero uid', () => {
  const uid = 0
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: '',
    selectedTab: '',
  })
})

test('saveState works with negative uid', () => {
  const uid = -1
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: '',
    selectedTab: '',
  })
})

test('saveState works with large uid', () => {
  const uid = 999_999
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: '',
    selectedTab: '',
  })
})

test('saveState returns empty array for expandedPaths', () => {
  const uid = 1
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(Array.isArray(result.expandedPaths)).toBe(true)
  expect(result.expandedPaths.length).toBe(0)
})

test('saveState returns empty string for root', () => {
  const uid = 1
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(typeof result.root).toBe('string')
  expect(result.root).toBe('')
})

test('saveState returns zero for minLineY', () => {
  const uid = 1
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(typeof result.minLineY).toBe('number')
  expect(result.minLineY).toBe(0)
})

test('saveState returns zero for maxLineY', () => {
  const uid = 1
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(typeof result.maxLineY).toBe('number')
  expect(result.maxLineY).toBe(0)
})

test('saveState returns zero for deltaY', () => {
  const uid = 1
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(typeof result.deltaY).toBe('number')
  expect(result.deltaY).toBe(0)
})

test('saveState returns same structure regardless of uid value', () => {
  const uid1 = 1
  const uid2 = 999
  const uid3 = -5
  const state = createDefaultState()

  set(uid1, state, state)
  set(uid2, state, state)
  set(uid3, state, state)

  const result1 = saveState(uid1)
  const result2 = saveState(uid2)
  const result3 = saveState(uid3)

  expect(result1).toEqual(result2)
  expect(result2).toEqual(result3)
  expect(result1).toEqual(result3)
})

test('saveState expandedPaths is readonly array', () => {
  const uid = 1
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  expect(Array.isArray(result.expandedPaths)).toBe(true)
  // We can't test readonly at runtime, but we can verify it's an array
  expect(result.expandedPaths).toEqual([])
})

test('saveState returns immutable object structure', () => {
  const uid = 1
  const state = createDefaultState()
  set(uid, state, state)

  const result = saveState(uid)

  // Verify all properties have the expected types
  expect(typeof result.expandedPaths).toBe('object')
  expect(typeof result.root).toBe('string')
  expect(typeof result.minLineY).toBe('number')
  expect(typeof result.maxLineY).toBe('number')
  expect(typeof result.deltaY).toBe('number')
  expect(typeof result.searchValue).toBe('string')
  expect(typeof result.selectedTab).toBe('string')
})

test('saveState saves searchValue from state', () => {
  const uid = 1
  const state = {
    ...createDefaultState(),
    searchValue: 'test search',
  }
  set(uid, state, state)

  const result = saveState(uid)

  expect(result.searchValue).toBe('test search')
})

test('saveState saves selectedTab from state', () => {
  const uid = 1
  const state = {
    ...createDefaultState(),
    tabs: getTabs(),
  }
  set(uid, state, state)

  const result = saveState(uid)

  expect(result.selectedTab).toBe(InputName.TextEditorTab)
})
