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
        id: 'test',
        heading: 'Test',
        description: 'Test description',
        type: SettingItemType.Number,
        value: '42',
        category: 'test',
        modified: false,
        errorMessage: '',
        hasError: false,
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
        id: 'item1',
        heading: 'Item 1',
        description: 'Description 1',
        type: SettingItemType.Number,
        value: '10',
        category: 'test',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
    ],
  }
  const newState: SettingsState = {
    ...oldState,
    filteredItems: [
      {
        id: 'item2',
        heading: 'Item 2',
        description: 'Description 2',
        type: SettingItemType.Number,
        value: '20',
        category: 'test',
        modified: false,
        errorMessage: '',
        hasError: false,
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
    searchValue: 'different search',
    focus: 5,
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
        id: 'item1',
        heading: 'Item 1',
        description: 'Description 1',
        type: SettingItemType.Number,
        value: '10',
        category: 'test',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
    ],
  }
  const newState: SettingsState = {
    ...createDefaultState(),
    filteredItems: [
      {
        id: 'item1',
        heading: 'Item 1',
        description: 'Description 1',
        type: SettingItemType.Number,
        value: '10',
        category: 'test',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
      {
        id: 'item2',
        heading: 'Item 2',
        description: 'Description 2',
        type: SettingItemType.Number,
        value: '20',
        category: 'test',
        modified: false,
        errorMessage: '',
        hasError: false,
      },
    ],
  }

  const result = isEqual(oldState, newState)

  expect(result).toBe(false)
})

test('isEqual returns false when filteredItems have same length and same items', () => {
  const sharedItem = {
    id: 'item1',
    heading: 'Item 1',
    description: 'Description 1',
    type: SettingItemType.Number,
    value: '10',
    category: 'test',
    modified: false,
    errorMessage: '',
    hasError: false,
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
