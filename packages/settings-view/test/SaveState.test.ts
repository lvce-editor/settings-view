import { test, expect } from '@jest/globals'
import { saveState } from '../src/parts/SaveState/SaveState.ts'

test('saveState returns SavedState object with correct structure', () => {
  const result = saveState(1)

  expect(typeof result).toBe('object')
  expect(result).toHaveProperty('expandedPaths')
  expect(result).toHaveProperty('root')
  expect(result).toHaveProperty('minLineY')
  expect(result).toHaveProperty('maxLineY')
  expect(result).toHaveProperty('deltaY')
})

test('saveState returns default values for all properties', () => {
  const result = saveState(123)

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
  })
})

test('saveState works with zero uid', () => {
  const result = saveState(0)

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
  })
})

test('saveState works with negative uid', () => {
  const result = saveState(-1)

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
  })
})

test('saveState works with large uid', () => {
  const result = saveState(999_999)

  expect(result).toEqual({
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
  })
})

test('saveState returns empty array for expandedPaths', () => {
  const result = saveState(1)

  expect(Array.isArray(result.expandedPaths)).toBe(true)
  expect(result.expandedPaths.length).toBe(0)
})

test('saveState returns empty string for root', () => {
  const result = saveState(1)

  expect(typeof result.root).toBe('string')
  expect(result.root).toBe('')
})

test('saveState returns zero for minLineY', () => {
  const result = saveState(1)

  expect(typeof result.minLineY).toBe('number')
  expect(result.minLineY).toBe(0)
})

test('saveState returns zero for maxLineY', () => {
  const result = saveState(1)

  expect(typeof result.maxLineY).toBe('number')
  expect(result.maxLineY).toBe(0)
})

test('saveState returns zero for deltaY', () => {
  const result = saveState(1)

  expect(typeof result.deltaY).toBe('number')
  expect(result.deltaY).toBe(0)
})

test('saveState returns same structure regardless of uid value', () => {
  const uid1 = 1
  const uid2 = 999
  const uid3 = -5

  const result1 = saveState(uid1)
  const result2 = saveState(uid2)
  const result3 = saveState(uid3)

  expect(result1).toEqual(result2)
  expect(result2).toEqual(result3)
  expect(result1).toEqual(result3)
})

test('saveState expandedPaths is readonly array', () => {
  const result = saveState(1)

  expect(Array.isArray(result.expandedPaths)).toBe(true)
  // We can't test readonly at runtime, but we can verify it's an array
  expect(result.expandedPaths).toEqual([])
})

test('saveState returns immutable object structure', () => {
  const result = saveState(1)

  // Verify all properties have the expected types
  expect(typeof result.expandedPaths).toBe('object')
  expect(typeof result.root).toBe('string')
  expect(typeof result.minLineY).toBe('number')
  expect(typeof result.maxLineY).toBe('number')
  expect(typeof result.deltaY).toBe('number')
})
