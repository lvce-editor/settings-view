import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffValue/DiffValue.ts'
import { User, Script } from '../src/parts/InputSource/InputSource.ts'

test('isEqual returns true when newState inputSource is User', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    searchValue: 'old',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    inputSource: User,
    searchValue: 'different',
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns true when searchValues match', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    searchValue: 'test',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    inputSource: Script,
    searchValue: 'test',
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns false when searchValues do not match and inputSource is Script', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    searchValue: 'old',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    inputSource: Script,
    searchValue: 'new',
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns true when searchValues are both empty strings', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    searchValue: '',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    inputSource: Script,
    searchValue: '',
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns true when newState inputSource is User even if searchValues differ', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    searchValue: 'completely different',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    inputSource: User,
    searchValue: 'something else',
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns false when searchValues differ and inputSource is not User', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    searchValue: 'first',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    inputSource: 0,
    searchValue: 'second',
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns true when searchValues match exactly with special characters', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    searchValue: 'test@123!',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    inputSource: Script,
    searchValue: 'test@123!',
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns false when searchValues differ by case', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    searchValue: 'Test',
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    inputSource: Script,
    searchValue: 'test',
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})
