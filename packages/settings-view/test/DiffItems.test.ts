import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { isEqual } from '../src/parts/DiffItems/DiffItems.ts'

test('isEqual returns true for same state reference', () => {
  const mockState: SettingsState = {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    focus: 0,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  }

  const result = isEqual(mockState, mockState)

  expect(result).toBe(true)
})

test('isEqual returns false for different state references with same values', () => {
  const oldState: SettingsState = {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    focus: 0,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  }

  const newState: SettingsState = {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    focus: 0,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns false for states with different values', () => {
  const oldState: SettingsState = {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    focus: 0,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  }

  const newState: SettingsState = {
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

test('isEqual returns false when only one property differs', () => {
  const oldState: SettingsState = {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    focus: 0,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  }

  const newState: SettingsState = {
    breakPointsExpanded: true,
    breakPointsVisible: true,
    focus: 0,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual handles null and undefined states', () => {
  const mockState: SettingsState = {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    focus: 0,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  }

  // @ts-expect-error - testing with null
  expect(isEqual(null, mockState)).toBe(false)
  // @ts-expect-error - testing with undefined
  expect(isEqual(undefined, mockState)).toBe(false)
  // @ts-expect-error - testing with null
  expect(isEqual(mockState, null)).toBe(false)
  // @ts-expect-error - testing with undefined
  expect(isEqual(mockState, undefined)).toBe(false)
})
