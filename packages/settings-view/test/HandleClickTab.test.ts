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
      { label: 'Tab 1', selected: false },
      { label: 'Tab 2', selected: true },
      { label: 'Tab 3', selected: false },
    ],
  }

  const result = handleClickTab(stateWithTabs, 'Tab 1')

  expect(result.tabs).toEqual([
    { label: 'Tab 1', selected: true },
    { label: 'Tab 2', selected: false },
    { label: 'Tab 3', selected: false },
  ])
})

test('handleClickTab updates tabs array correctly when clicking middle tab', () => {
  const state = createDefaultState()
  const stateWithTabs = {
    ...state,
    tabs: [
      { label: 'Tab 1', selected: true },
      { label: 'Tab 2', selected: false },
      { label: 'Tab 3', selected: false },
    ],
  }

  const result = handleClickTab(stateWithTabs, 'Tab 2')

  expect(result.tabs).toEqual([
    { label: 'Tab 1', selected: false },
    { label: 'Tab 2', selected: true },
    { label: 'Tab 3', selected: false },
  ])
})

test('handleClickTab updates tabs array correctly when clicking last tab', () => {
  const state = createDefaultState()
  const stateWithTabs = {
    ...state,
    tabs: [
      { label: 'Tab 1', selected: true },
      { label: 'Tab 2', selected: false },
      { label: 'Tab 3', selected: false },
    ],
  }

  const result = handleClickTab(stateWithTabs, 'Tab 3')

  expect(result.tabs).toEqual([
    { label: 'Tab 1', selected: false },
    { label: 'Tab 2', selected: false },
    { label: 'Tab 3', selected: true },
  ])
})

test('handleClickTab handles non-existent tab name gracefully', () => {
  const state = createDefaultState()
  const stateWithTabs = {
    ...state,
    tabs: [
      { label: 'Tab 1', selected: true },
      { label: 'Tab 2', selected: false },
    ],
  }

  const result = handleClickTab(stateWithTabs, 'Non-existent Tab')

  expect(result.tabs).toEqual([
    { label: 'Tab 1', selected: false },
    { label: 'Tab 2', selected: false },
  ])
})

test('handleClickTab preserves other state properties', () => {
  const state = createDefaultState()
  const stateWithTabs = {
    ...state,
    tabs: [
      { label: 'Tab 1', selected: false },
      { label: 'Tab 2', selected: true },
    ],
    focus: 42,
    height: 100,
  }

  const result = handleClickTab(stateWithTabs, 'Tab 1')

  expect(result.focus).toBe(42)
  expect(result.height).toBe(100)
  expect(result.tabs).toEqual([
    { label: 'Tab 1', selected: true },
    { label: 'Tab 2', selected: false },
  ])
})