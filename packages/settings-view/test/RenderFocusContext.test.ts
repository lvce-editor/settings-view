import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../src/parts/ViewletCommand/ViewletCommand.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderFocusContext from '../src/parts/RenderFocusContext/RenderFocusContext.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('renderFocusContext returns correct ViewletCommand', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result: ViewletCommand = RenderFocusContext.renderFocusContext(oldState, newState)

  expect(result).toEqual(['Viewlet.setFocusContext', WhenExpression.FocusSettingsInput])
})

test('renderFocusContext returns same command regardless of oldState', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    id: 999,
    searchValue: 'old search',
  }
  const newState: SettingsState = createDefaultState()

  const result: ViewletCommand = RenderFocusContext.renderFocusContext(oldState, newState)

  expect(result).toEqual(['Viewlet.setFocusContext', WhenExpression.FocusSettingsInput])
})

test('renderFocusContext returns same command regardless of newState', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 123,
    searchValue: 'new search',
  }

  const result: ViewletCommand = RenderFocusContext.renderFocusContext(oldState, newState)

  expect(result).toEqual(['Viewlet.setFocusContext', WhenExpression.FocusSettingsInput])
})

test('renderFocusContext returns same command with different states', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    id: 111,
    searchValue: 'old',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 222,
    searchValue: 'new',
  }

  const result: ViewletCommand = RenderFocusContext.renderFocusContext(oldState, newState)

  expect(result).toEqual(['Viewlet.setFocusContext', WhenExpression.FocusSettingsInput])
})
