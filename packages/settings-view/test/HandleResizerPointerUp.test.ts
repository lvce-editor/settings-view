import { expect, test } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleResizerPointerUp } from '../src/parts/HandleResizerPointerUp/HandleResizerPointerUp.ts'

test('handleResizerPointerUp returns state', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerUp(state, 100, 200)
  expect(result).toBe(state)
})

test('handleResizerPointerUp preserves all state properties', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    height: 800,
    searchValue: 'test',
    sideBarWidth: 250,
    width: 1200,
  }
  const result = handleResizerPointerUp(state, 150, 300)
  expect(result).toBe(state)
  expect(result.sideBarWidth).toBe(250)
  expect(result.height).toBe(800)
  expect(result.width).toBe(1200)
  expect(result.searchValue).toBe('test')
})

test('handleResizerPointerUp accepts eventX and eventY parameters', () => {
  const state: SettingsState = createDefaultState()
  const result1 = handleResizerPointerUp(state, 100, 200)
  const result2 = handleResizerPointerUp(state, 300, 400)
  expect(result1).toBe(state)
  expect(result2).toBe(state)
})

test('handleResizerPointerUp handles zero coordinates', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerUp(state, 0, 0)
  expect(result).toBe(state)
  expect(result).toEqual(state)
})

test('handleResizerPointerUp handles negative coordinates', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerUp(state, -10, -20)
  expect(result).toBe(state)
  expect(result).toEqual(state)
})

test('handleResizerPointerUp handles large coordinates', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerUp(state, 10_000, 20_000)
  expect(result).toBe(state)
  expect(result).toEqual(state)
})
