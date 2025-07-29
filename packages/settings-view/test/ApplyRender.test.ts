import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { applyRender } from '../src/parts/ApplyRender/ApplyRender.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

test('applyRender calls getRenderer for each diff result and returns commands', () => {
  const oldState = createDefaultState()

  const newState: SettingsState = {
    ...oldState,
    id: 2,
  }

  const diffResult = [DiffType.RenderItems, DiffType.RenderValue]
  const result = applyRender(oldState, newState, diffResult)

  expect(result).toHaveLength(2)
  expect(result[0][0]).toBe('Viewlet.setDom2')
  expect(result[1][0]).toBe('Viewlet.setValueByName')
})

test('applyRender returns empty array when diffResult is empty', () => {
  const oldState = createDefaultState()

  const newState: SettingsState = {
    ...oldState,
    id: 2,
  }

  const diffResult: readonly number[] = []
  const result = applyRender(oldState, newState, diffResult)

  expect(result).toEqual([])
})
