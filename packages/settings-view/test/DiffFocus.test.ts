import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffFocus/DiffFocus.ts'

test('isEqual returns true when focus values are the same', () => {
  const oldState: SettingsState = { ...createDefaultState(), focus: 5 }
  const newState: SettingsState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    breakPointsVisible: false,
    focus: 5,
    height: 800,
    id: 2,
    uri: 'different://uri',
    width: 1200,
    x: 100,
    y: 200,
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns false when focus values are different', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), focus: 5 }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns true for same state reference', () => {
  const oldState: SettingsState = { ...createDefaultState(), focus: 5 }
  const newState: SettingsState = { ...createDefaultState(), focus: 5 }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual works with negative focus values', () => {
  const oldState: SettingsState = { ...createDefaultState(), focus: -1 }
  const newState: SettingsState = { ...createDefaultState(), focus: -1 }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual works with zero focus values', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns false when focus values differ by one', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), focus: 1 }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual works with large focus values', () => {
  const oldState: SettingsState = { ...createDefaultState(), focus: 1000 }
  const newState: SettingsState = { ...createDefaultState(), focus: 1000 }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns false when focus values differ significantly', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), focus: 999 }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual works with decimal focus values', () => {
  const oldState: SettingsState = { ...createDefaultState(), focus: 5.5 }
  const newState: SettingsState = { ...createDefaultState(), focus: 5.5 }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})
