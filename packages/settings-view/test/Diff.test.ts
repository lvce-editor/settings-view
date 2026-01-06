import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { diff } from '../src/parts/Diff/Diff.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test.skip('diff returns RenderItems when states are different objects with same values', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2)
  expect(result).toContain(DiffType.RenderItems)
  expect(result).toContain(DiffType.RenderSettingValues)
})

test.skip('diff returns both RenderFocus and RenderItems when focus values differ', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), focus: 5 }

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(3)
  expect(result).toContain(DiffType.RenderFocus)
  expect(result).toContain(DiffType.RenderItems)
  expect(result).toContain(DiffType.RenderSettingValues)
})

test.skip('diff returns RenderItems when states are different objects', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2)
  expect(result).toContain(DiffType.RenderItems)
  expect(result).toContain(DiffType.RenderSettingValues)
})

test.skip('diff returns both RenderFocus and RenderItems when both conditions are met', () => {
  const oldState: SettingsState = createDefaultState()
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

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(3)
  expect(result).toContain(DiffType.RenderFocus)
  expect(result).toContain(DiffType.RenderItems)
  expect(result).toContain(DiffType.RenderSettingValues)
})

test.skip('diff returns RenderFocus when only focus differs', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), focus: 10 }

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(3) // RenderFocus, RenderItems, and RenderSettingValues
  expect(result).toContain(DiffType.RenderFocus)
  expect(result).toContain(DiffType.RenderItems)
  expect(result).toContain(DiffType.RenderSettingValues)
})

test.skip('diff works with negative focus values', () => {
  const oldState: SettingsState = { ...createDefaultState(), focus: -1 }
  const newState: SettingsState = { ...createDefaultState(), focus: 1 }

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(3) // RenderFocus, RenderItems, and RenderSettingValues
  expect(result).toContain(DiffType.RenderFocus)
  expect(result).toContain(DiffType.RenderItems)
  expect(result).toContain(DiffType.RenderSettingValues)
})

test.skip('diff works with zero focus values', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2) // RenderItems and RenderSettingValues (different objects)
  expect(result).toContain(DiffType.RenderItems)
  expect(result).toContain(DiffType.RenderSettingValues)
})

test.skip('diff returns readonly array', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), focus: 5 }

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  // The return type should be readonly, but we can't test that at runtime
  // We just verify it's an array with the expected content
  expect(result).toContain(DiffType.RenderFocus)
})

test.skip('diff returns RenderSettingValues when filteredItems change', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'editor',
        description: 'Font size description',
        errorMessage: '',
        hasError: false,
        heading: 'Font Size',
        id: 'fontSize',
        modified: false,
        type: SettingItemType.Number,
        value: '15',
      },
    ],
  }

  const result = diff(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result).toContain(DiffType.RenderSettingValues)
  expect(result).toContain(DiffType.RenderItems)
})
