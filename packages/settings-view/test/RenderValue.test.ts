import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../src/parts/ViewletCommand/ViewletCommand.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderValue } from '../src/parts/RenderValue/RenderValue.ts'

test('renderValue returns correct ViewletCommand with search value', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 123,
    searchValue: 'test search',
  }

  const result: ViewletCommand = renderValue(oldState, newState)

  expect(result).toEqual(['Viewlet.setValueByName', 123, 'SettingsSearch', 'test search'])
})

test('renderValue returns correct ViewletCommand with empty search value', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 456,
    searchValue: '',
  }

  const result: ViewletCommand = renderValue(oldState, newState)

  expect(result).toEqual(['Viewlet.setValueByName', 456, 'SettingsSearch', ''])
})

test('renderValue returns correct ViewletCommand with special characters in search value', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 789,
    searchValue: 'test@#$%^&*()',
  }

  const result: ViewletCommand = renderValue(oldState, newState)

  expect(result).toEqual(['Viewlet.setValueByName', 789, 'SettingsSearch', 'test@#$%^&*()'])
})

test('renderValue ignores oldState and only uses newState', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    id: 999,
    searchValue: 'old search value',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 111,
    searchValue: 'new search value',
  }

  const result: ViewletCommand = renderValue(oldState, newState)

  expect(result).toEqual(['Viewlet.setValueByName', 111, 'SettingsSearch', 'new search value'])
})
