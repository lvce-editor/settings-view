import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../src/parts/ViewletCommand/ViewletCommand.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'

test('renderItems returns correct ViewletCommand with default state', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()

  const result: ViewletCommand = renderItems(oldState, newState)

  expect(result[0]).toBe('Viewlet.setDom2')
  expect(result[1]).toBe(newState.id)
  expect(Array.isArray(result[2])).toBe(true)
  expect(result[2].length).toBeGreaterThan(0)
})

test('renderItems returns correct ViewletCommand with custom id', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 123,
  }

  const result: ViewletCommand = renderItems(oldState, newState)

  expect(result[0]).toBe('Viewlet.setDom2')
  expect(result[1]).toBe(123)
  expect(Array.isArray(result[2])).toBe(true)
  expect(result[2].length).toBeGreaterThan(0)
})

test('renderItems returns correct ViewletCommand with search value', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 456,
    searchValue: 'test search',
  }

  const result: ViewletCommand = renderItems(oldState, newState)

  expect(result[0]).toBe('Viewlet.setDom2')
  expect(result[1]).toBe(456)
  expect(Array.isArray(result[2])).toBe(true)
  expect(result[2].length).toBeGreaterThan(0)
})

test('renderItems ignores oldState and only uses newState', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    id: 999,
    searchValue: 'old search',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 111,
    searchValue: 'new search',
  }

  const result: ViewletCommand = renderItems(oldState, newState)

  expect(result[0]).toBe('Viewlet.setDom2')
  expect(result[1]).toBe(111)
  expect(Array.isArray(result[2])).toBe(true)
  expect(result[2].length).toBeGreaterThan(0)
})

test('renderItems returns correct ViewletCommand with empty search value', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...createDefaultState(),
    id: 789,
    searchValue: '',
  }

  const result: ViewletCommand = renderItems(oldState, newState)

  expect(result[0]).toBe('Viewlet.setDom2')
  expect(result[1]).toBe(789)
  expect(Array.isArray(result[2])).toBe(true)
  expect(result[2].length).toBeGreaterThan(0)
})
