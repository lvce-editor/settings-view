import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleWheel } from '../src/parts/HandleWheel/HandleWheel.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('handleWheel accumulates deltaY', () => {
  const state = {
    ...createDefaultState(),
    filteredItems: Array.from({ length: 20 }, (_, i) => ({
      category: '',
      description: '',
      errorMessage: '',
      hasError: false,
      heading: '',
      id: String(i),
      modified: false,
      type: SettingItemType.String,
      value: '',
    })),
    height: 600,
    itemHeight: 100,
  }
  const state1 = handleWheel(state, 10)
  expect(state1.deltaY).toBe(10)

  const state2 = handleWheel(state1, 5)
  expect(state2.deltaY).toBe(15)
})

test('handleWheel supports negative deltaY', () => {
  const state = {
    ...createDefaultState(),
    filteredItems: Array.from({ length: 20 }, (_, i) => ({
      category: '',
      description: '',
      errorMessage: '',
      hasError: false,
      heading: '',
      id: String(i),
      modified: false,
      type: SettingItemType.String,
      value: '',
    })),
    height: 600,
    itemHeight: 100,
  }
  const state1 = handleWheel(state, -20)
  expect(state1.deltaY).toBe(0)

  const state2 = handleWheel(state1, 30)
  expect(state2.deltaY).toBe(30)
})

test('handleWheel clamps to max based on content height minus viewport', () => {
  const state = {
    ...createDefaultState(),
    filteredItems: [
      {
        category: '',
        description: '',
        errorMessage: '',
        hasError: false,
        heading: '',
        id: 'a',
        modified: false,
        type: SettingItemType.String,
        value: '',
      },
      {
        category: '',
        description: '',
        errorMessage: '',
        hasError: false,
        heading: '',
        id: 'b',
        modified: false,
        type: SettingItemType.String,
        value: '',
      },
      {
        category: '',
        description: '',
        errorMessage: '',
        hasError: false,
        heading: '',
        id: 'c',
        modified: false,
        type: SettingItemType.String,
        value: '',
      },
    ],
    height: 600,
    itemHeight: 100,
  }
  // totalContentHeight = 3 * 75 = 225, viewport height = 600 => max scroll = 0
  const state1 = handleWheel(state, 150)
  expect(state1.deltaY).toBe(0)

  const state2 = {
    ...state,
    filteredItems: Array.from({ length: 10 }, (_, i) => ({
      category: '',
      description: '',
      errorMessage: '',
      hasError: false,
      heading: '',
      id: String(i),
      modified: false,
      type: SettingItemType.String,
      value: '',
    })),
  }
  // totalContentHeight = 10 * 75 = 750, viewport = 600 => max = 150
  const state3 = handleWheel(state2, 500)
  expect(state3.deltaY).toBe(150)
})
