import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { diff } from '../src/parts/Diff/Diff.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

test('diff returns RenderItems when states are different objects with same values', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(1)
  expect(result).toContain(DiffType.RenderItems)
})

test('diff returns both RenderFocus and RenderItems when focus values differ', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), focus: 5 }

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2)
  expect(result).toContain(DiffType.RenderFocus)
  expect(result).toContain(DiffType.RenderItems)
})

test('diff returns RenderItems when states are different objects', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(1)
  expect(result).toContain(DiffType.RenderItems)
})

test('diff returns both RenderFocus and RenderItems when both conditions are met', () => {
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

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2)
  expect(result).toContain(DiffType.RenderFocus)
  expect(result).toContain(DiffType.RenderItems)
})

test('diff returns RenderFocus when only focus differs', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), focus: 10 }

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2) // Both RenderFocus and RenderItems
  expect(result).toContain(DiffType.RenderFocus)
  expect(result).toContain(DiffType.RenderItems)
})

test('diff works with negative focus values', () => {
  const oldState: SettingsState = { ...createDefaultState(), focus: -1 }
  const newState: SettingsState = { ...createDefaultState(), focus: 1 }

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2) // Both RenderFocus and RenderItems
  expect(result).toContain(DiffType.RenderFocus)
  expect(result).toContain(DiffType.RenderItems)
})

test('diff works with zero focus values', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(1) // Only RenderItems (different objects)
  expect(result).toContain(DiffType.RenderItems)
})

test('diff returns readonly array', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), focus: 5 }

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  // The return type should be readonly, but we can't test that at runtime
  // We just verify it's an array with the expected content
  expect(result).toContain(DiffType.RenderFocus)
})
