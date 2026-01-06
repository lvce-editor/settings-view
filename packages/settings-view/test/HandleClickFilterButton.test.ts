import { expect, test } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickFilterButton } from '../src/parts/HandleClickFilterButton/HandleClickFilterButton.ts'

test('handleClickFilterButton returns the state', () => {
  const state: SettingsState = createDefaultState()
  const result = handleClickFilterButton(state)
  expect(result).toEqual(state)
})

test('handleClickFilterButton returns same state object', () => {
  const state: SettingsState = createDefaultState()
  const result = handleClickFilterButton(state)
  expect(result).toBe(state)
})
