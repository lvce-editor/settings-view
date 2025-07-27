import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickTab } from '../src/parts/HandleClickTab/HandleClickTab.ts'

test('handleClickTab returns same state when name is empty', () => {
  const state = createDefaultState()
  const result = handleClickTab(state, '')
  expect(result).toEqual(state)
})

test('handleClickTab returns same state when name is undefined', () => {
  const state = createDefaultState()
  const result = handleClickTab(state, undefined as any)
  expect(result).toEqual(state)
})

test('handleClickTab returns new state object when name is provided', () => {
  const state = createDefaultState()
  const result = handleClickTab(state, 'test-tab')
  expect(result).not.toBe(state)
  expect(result).toEqual(state)
})

test('handleClickTab updates tabs array correctly when clicking first tab', () => {
  const state = createDefaultState()
  const stateWithTabs = {
    ...state,
    tabs: [
      { id: 'tab-1', label: 'Tab 1', selected: false },
      { id: 'tab-2', label: 'Tab 2', selected: true },
      { id: 'tab-3', label: 'Tab 3', selected: false },
    ],
  }

  const result = handleClickTab(stateWithTabs, 'tab-1')

  expect(result.tabs).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: true },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ])
})

test('handleClickTab updates tabs array correctly when clicking middle tab', () => {
  const state = createDefaultState()
  const stateWithTabs = {
    ...state,
    tabs: [
      { id: 'tab-1', label: 'Tab 1', selected: true },
      { id: 'tab-2', label: 'Tab 2', selected: false },
      { id: 'tab-3', label: 'Tab 3', selected: false },
    ],
  }

  const result = handleClickTab(stateWithTabs, 'tab-2')

  expect(result.tabs).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: true },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ])
})

test('handleClickTab updates tabs array correctly when clicking last tab', () => {
  const state = createDefaultState()
  const stateWithTabs = {
    ...state,
    tabs: [
      { id: 'tab-1', label: 'Tab 1', selected: true },
      { id: 'tab-2', label: 'Tab 2', selected: false },
      { id: 'tab-3', label: 'Tab 3', selected: false },
    ],
  }

  const result = handleClickTab(stateWithTabs, 'tab-3')

  expect(result.tabs).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: true },
  ])
})

test('handleClickTab handles non-existent tab id gracefully', () => {
  const state = createDefaultState()
  const stateWithTabs = {
    ...state,
    tabs: [
      { id: 'tab-1', label: 'Tab 1', selected: true },
      { id: 'tab-2', label: 'Tab 2', selected: false },
    ],
  }

  const result = handleClickTab(stateWithTabs, 'non-existent-tab')

  expect(result.tabs).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: false },
  ])
})

test('handleClickTab preserves other state properties', () => {
  const state = createDefaultState()
  const stateWithTabs = {
    ...state,
    tabs: [
      { id: 'tab-1', label: 'Tab 1', selected: false },
      { id: 'tab-2', label: 'Tab 2', selected: true },
    ],
    focus: 42,
    height: 100,
  }

  const result = handleClickTab(stateWithTabs, 'tab-1')

  expect(result.focus).toBe(42)
  expect(result.height).toBe(100)
  expect(result.tabs).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: true },
    { id: 'tab-2', label: 'Tab 2', selected: false },
  ])
})
