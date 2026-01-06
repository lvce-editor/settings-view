import { expect, test } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleResizerPointerDown } from '../src/parts/HandleResizerPointerDown/HandleResizerPointerDown.ts'

test('handleResizerPointerDown returns state', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerDown(state, 100, 200)
  expect(result).toBe(state)
})

test('handleResizerPointerDown preserves all state properties', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    height: 800,
    searchValue: 'test',
    sideBarWidth: 250,
    width: 1200,
  }
  const result = handleResizerPointerDown(state, 150, 300)
  expect(result).toBe(state)
  expect(result.sideBarWidth).toBe(250)
  expect(result.height).toBe(800)
  expect(result.width).toBe(1200)
  expect(result.searchValue).toBe('test')
})

test('handleResizerPointerDown accepts eventX and eventY parameters', () => {
  const state: SettingsState = createDefaultState()
  const result1 = handleResizerPointerDown(state, 100, 200)
  const result2 = handleResizerPointerDown(state, 300, 400)
  expect(result1).toBe(state)
  expect(result2).toBe(state)
})

test('handleResizerPointerDown handles zero coordinates', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerDown(state, 0, 0)
  expect(result).toBe(state)
  expect(result).toEqual(state)
})

test('handleResizerPointerDown handles negative coordinates', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerDown(state, -10, -20)
  expect(result).toBe(state)
  expect(result).toEqual(state)
})

test('handleResizerPointerDown handles large coordinates', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerDown(state, 10_000, 20_000)
  expect(result).toBe(state)
  expect(result).toEqual(state)
})
