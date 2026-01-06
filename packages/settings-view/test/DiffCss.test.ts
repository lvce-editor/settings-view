import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffCss from '../src/parts/DiffCss/DiffCss.ts'

test('isEqual returns true when sideBarWidth is equal', () => {
  const oldState: SettingsState = { ...createDefaultState(), sideBarWidth: 200 }
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 200 }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns false when sideBarWidth is different', () => {
  const oldState: SettingsState = { ...createDefaultState(), sideBarWidth: 200 }
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 300 }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(false)
})

test('isEqual returns true when sideBarWidth is equal but other properties differ', () => {
  const oldState: SettingsState = { ...createDefaultState(), sideBarWidth: 200, width: 800 }
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 200, width: 1000 }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns true when sideBarWidth is zero in both states', () => {
  const oldState: SettingsState = { ...createDefaultState(), sideBarWidth: 0 }
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 0 }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns false when sideBarWidth differs by one', () => {
  const oldState: SettingsState = { ...createDefaultState(), sideBarWidth: 200 }
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 201 }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(false)
})
