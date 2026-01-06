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

test('isEqual returns true when all CSS properties are equal', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 50,
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 50,
  }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns false when sideBarWidth is different', () => {
  const oldState: SettingsState = { ...createDefaultState(), sideBarWidth: 200 }
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 300 }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(false)
})

test('isEqual returns false when scrollBarThumbHeight is different', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 50,
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 150,
    scrollBarThumbTop: 50,
  }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(false)
})

test('isEqual returns false when scrollBarThumbTop is different', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 50,
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 75,
  }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(false)
})

test('isEqual returns true when CSS properties are equal but other properties differ', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 50,
    width: 800,
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 50,
    width: 1000,
  }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns true when all CSS properties are zero in both states', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 0,
    scrollBarThumbHeight: 0,
    scrollBarThumbTop: 0,
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 0,
    scrollBarThumbHeight: 0,
    scrollBarThumbTop: 0,
  }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns false when sideBarWidth differs by one', () => {
  const oldState: SettingsState = { ...createDefaultState(), sideBarWidth: 200 }
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 201 }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(false)
})

test('isEqual returns false when scrollBarThumbHeight differs by one', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 50,
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 101,
    scrollBarThumbTop: 50,
  }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(false)
})

test('isEqual returns false when scrollBarThumbTop differs by one', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 50,
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    sideBarWidth: 200,
    scrollBarThumbHeight: 100,
    scrollBarThumbTop: 51,
  }
  const result = DiffCss.isEqual(oldState, newState)
  expect(result).toBe(false)
})
