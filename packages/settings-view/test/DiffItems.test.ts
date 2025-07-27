import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffItems/DiffItems.ts'

test('isEqual returns true for same state reference', () => {
  const mockState: SettingsState = createDefaultState()

  const result = isEqual(mockState, mockState)

  expect(result).toBe(true)
})

test('isEqual returns false for different state objects with same values', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns false for states with different values', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    breakPointsVisible: false,
    focus: 5,
    id: 2,
    uri: 'different://uri',
    x: 100,
    y: 200,
    width: 1200,
    height: 800,
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns false for states with different focus values', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    breakPointsVisible: true,
    focus: 5,
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns false for states with different boolean values', () => {
  const mockState: SettingsState = createDefaultState()
  const differentState: SettingsState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    breakPointsVisible: false,
  }

  const result = isEqual(mockState, differentState)

  expect(result).toBe(false)
})

test('isEqual returns false for states with different numeric values', () => {
  const mockState: SettingsState = createDefaultState()
  const differentState: SettingsState = {
    ...createDefaultState(),
    id: 999,
    x: 999,
    y: 999,
    width: 999,
    height: 999,
  }

  const result = isEqual(mockState, differentState)

  expect(result).toBe(false)
})

test('isEqual returns false for states with different string values', () => {
  const mockState: SettingsState = createDefaultState()
  const differentState: SettingsState = {
    ...createDefaultState(),
    uri: 'completely://different',
  }

  const result = isEqual(mockState, differentState)

  expect(result).toBe(false)
})

test('isEqual handles null and undefined states', () => {
  const mockState: SettingsState = createDefaultState()

  // @ts-expect-error - testing with null
  expect(isEqual(null, mockState)).toBe(false)
  // @ts-expect-error - testing with undefined
  expect(isEqual(undefined, mockState)).toBe(false)
  // @ts-expect-error - testing with null
  expect(isEqual(mockState, null)).toBe(false)
  // @ts-expect-error - testing with undefined
  expect(isEqual(mockState, undefined)).toBe(false)
})
