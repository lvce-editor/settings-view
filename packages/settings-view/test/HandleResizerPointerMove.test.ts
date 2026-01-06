import { expect, test } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleResizerPointerMove } from '../src/parts/HandleResizerPointerMove/HandleResizerPointerMove.ts'

test('handleResizerPointerMove returns new state object', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerMove(state, 100, 200)
  expect(result).not.toBe(state)
})

test('handleResizerPointerMove updates sideBarWidth to eventX', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerMove(state, 300, 200)
  expect(result.sideBarWidth).toBe(300)
})

test('handleResizerPointerMove preserves all other state properties', () => {
  const state: SettingsState = {
    ...createDefaultState(),
    focus: 5,
    height: 800,
    searchValue: 'test',
    sideBarWidth: 250,
    width: 1200,
  }
  const result = handleResizerPointerMove(state, 400, 300)
  expect(result.height).toBe(800)
  expect(result.width).toBe(1200)
  expect(result.searchValue).toBe('test')
  expect(result.focus).toBe(5)
  expect(result.sideBarWidth).toBe(400)
})

test('handleResizerPointerMove handles zero eventX', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerMove(state, 0, 200)
  expect(result.sideBarWidth).toBe(100)
  expect(result).not.toBe(state)
})

test('handleResizerPointerMove handles negative eventX', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerMove(state, -10, 200)
  expect(result.sideBarWidth).toBe(100)
  expect(result).not.toBe(state)
})

test('handleResizerPointerMove handles large eventX', () => {
  const state: SettingsState = createDefaultState()
  const result = handleResizerPointerMove(state, 10_000, 200)
  expect(result.sideBarWidth).toBe(10_000)
  expect(result).not.toBe(state)
})

test('handleResizerPointerMove ignores eventY parameter', () => {
  const state: SettingsState = createDefaultState()
  const result1 = handleResizerPointerMove(state, 300, 100)
  const result2 = handleResizerPointerMove(state, 300, 500)
  expect(result1.sideBarWidth).toBe(300)
  expect(result2.sideBarWidth).toBe(300)
  expect(result1.sideBarWidth).toBe(result2.sideBarWidth)
})
