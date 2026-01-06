import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../src/parts/ViewletCommand/ViewletCommand.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import { renderFocus } from '../src/parts/RenderFocus/RenderFocus.ts'

test('renderFocus returns correct ViewletCommand with default state', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result: ViewletCommand = renderFocus(oldState, newState)

  expect(result[0]).toBe('Viewlet.focusSelector')
  expect(result[1]).toBe(newState.id)
  expect(result[2]).toBe(`[name="${InputName.SettingsSearch}"]`)
})

test('renderFocus uses id from newState', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), id: 42 }

  const result: ViewletCommand = renderFocus(oldState, newState)

  expect(result[1]).toBe(42)
})

test('renderFocus uses correct selector', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result: ViewletCommand = renderFocus(oldState, newState)

  expect(result[2]).toBe(`[name="${InputName.SettingsSearch}"]`)
})

test('renderFocus ignores oldState id', () => {
  const oldState: SettingsState = { ...createDefaultState(), id: 100 }
  const newState: SettingsState = { ...createDefaultState(), id: 200 }

  const result: ViewletCommand = renderFocus(oldState, newState)

  expect(result[1]).toBe(200)
  expect(result[1]).not.toBe(100)
})

test('renderFocus works with different state properties', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    focus: 5,
    searchValue: 'test',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    focus: 10,
    id: 3,
    searchValue: 'different',
  }

  const result: ViewletCommand = renderFocus(oldState, newState)

  expect(result[0]).toBe('Viewlet.focusSelector')
  expect(result[1]).toBe(3)
  expect(result[2]).toBe(`[name="${InputName.SettingsSearch}"]`)
})

test('renderFocus returns correct command structure', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), id: 7 }

  const result: ViewletCommand = renderFocus(oldState, newState)

  expect(result.length).toBe(3)
  expect(typeof result[0]).toBe('string')
  expect(typeof result[1]).toBe('number')
  expect(typeof result[2]).toBe('string')
})
