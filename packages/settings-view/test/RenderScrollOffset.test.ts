import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../src/parts/ViewletCommand/ViewletCommand.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderScrollOffset } from '../src/parts/RenderScrollOffset/RenderScrollOffset.ts'

test('renderScrollOffset returns correct ViewletCommand with default state', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()

  const result: ViewletCommand = renderScrollOffset(oldState, newState)

  expect(result[0]).toBe('Viewlet.setProperty')
  expect(result[1]).toBe(newState.id)
  expect(result[2]).toBe('.SettingsContent')
  expect(result[3]).toBe('scrollTop')
  expect(result[4]).toBe(0)
})

test('renderScrollOffset returns correct ViewletCommand with custom id', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 123,
  }

  const result: ViewletCommand = renderScrollOffset(oldState, newState)

  expect(result[0]).toBe('Viewlet.setProperty')
  expect(result[1]).toBe(123)
  expect(result[2]).toBe('.SettingsContent')
  expect(result[3]).toBe('scrollTop')
  expect(result[4]).toBe(0)
})

test('renderScrollOffset returns correct ViewletCommand with custom scrollOffset', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    scrollOffset: 100,
  }

  const result: ViewletCommand = renderScrollOffset(oldState, newState)

  expect(result[0]).toBe('Viewlet.setProperty')
  expect(result[1]).toBe(newState.id)
  expect(result[2]).toBe('.SettingsContent')
  expect(result[3]).toBe('scrollTop')
  expect(result[4]).toBe(100)
})

test('renderScrollOffset returns correct ViewletCommand with custom id and scrollOffset', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 456,
    scrollOffset: 250,
  }

  const result: ViewletCommand = renderScrollOffset(oldState, newState)

  expect(result[0]).toBe('Viewlet.setProperty')
  expect(result[1]).toBe(456)
  expect(result[2]).toBe('.SettingsContent')
  expect(result[3]).toBe('scrollTop')
  expect(result[4]).toBe(250)
})

test('renderScrollOffset ignores oldState and only uses newState', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    id: 999,
    scrollOffset: 500,
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 111,
    scrollOffset: 75,
  }

  const result: ViewletCommand = renderScrollOffset(oldState, newState)

  expect(result[0]).toBe('Viewlet.setProperty')
  expect(result[1]).toBe(111)
  expect(result[2]).toBe('.SettingsContent')
  expect(result[3]).toBe('scrollTop')
  expect(result[4]).toBe(75)
})

test('renderScrollOffset returns correct ViewletCommand with negative scrollOffset', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    scrollOffset: -50,
  }

  const result: ViewletCommand = renderScrollOffset(oldState, newState)

  expect(result[0]).toBe('Viewlet.setProperty')
  expect(result[1]).toBe(newState.id)
  expect(result[2]).toBe('.SettingsContent')
  expect(result[3]).toBe('scrollTop')
  expect(result[4]).toBe(-50)
})
