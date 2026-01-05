import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffSettingValues/DiffSettingValues.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('isEqual returns true when filteredItems are the same reference', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns false when filteredItems are different', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...oldState,
    filteredItems: [
      {
        category: 'test',
        description: 'Test description',
        errorMessage: '',
        hasError: false,
        heading: 'Test',
        id: 'test',
        modified: false,
        type: SettingItemType.Number,
        value: '42',
      },
    ],
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns false when filteredItems have different content but same length', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'test',
        description: 'Description 1',
        errorMessage: '',
        hasError: false,
        heading: 'Item 1',
        id: 'item1',
        modified: false,
        type: SettingItemType.Number,
        value: '10',
      },
    ],
  }
  const newState: SettingsState = {
    ...oldState,
    filteredItems: [
      {
        category: 'test',
        description: 'Description 2',
        errorMessage: '',
        hasError: false,
        heading: 'Item 2',
        id: 'item2',
        modified: false,
        type: SettingItemType.Number,
        value: '20',
      },
    ],
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns true when other properties change but filteredItems remain the same', () => {
  const oldState = createDefaultState()
  const newState: SettingsState = {
    ...oldState,
    focus: 5,
    searchValue: 'different search',
    width: 1000,
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(true)
})

test('isEqual returns false when filteredItems have different lengths', () => {
  const oldState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'test',
        description: 'Description 1',
        errorMessage: '',
        hasError: false,
        heading: 'Item 1',
        id: 'item1',
        modified: false,
        type: SettingItemType.Number,
        value: '10',
      },
    ],
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: 'test',
        description: 'Description 1',
        errorMessage: '',
        hasError: false,
        heading: 'Item 1',
        id: 'item1',
        modified: false,
        type: SettingItemType.Number,
        value: '10',
      },
      {
        category: 'test',
        description: 'Description 2',
        errorMessage: '',
        hasError: false,
        heading: 'Item 2',
        id: 'item2',
        modified: false,
        type: SettingItemType.Number,
        value: '20',
      },
    ],
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns false when filteredItems have same length and same items', () => {
  const sharedItem = {
    category: 'test',
    description: 'Description 1',
    errorMessage: '',
    hasError: false,
    heading: 'Item 1',
    id: 'item1',
    modified: false,
    type: SettingItemType.Number,
    value: '10',
  }

  const oldState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [sharedItem],
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [sharedItem],
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})
