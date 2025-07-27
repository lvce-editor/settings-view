import { expect, test } from '@jest/globals'
import { getUpdatedTabs } from '../src/parts/GetUpdatedTabs/GetUpdatedTabs.ts'

test('getUpdatedTabs selects the first tab when clicked', () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: true },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'tab-1')

  expect(result).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: true },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ])
})

test('getUpdatedTabs selects the middle tab when clicked', () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab 1', selected: true },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'tab-2')

  expect(result).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: true },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ])
})

test('getUpdatedTabs selects the last tab when clicked', () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab 1', selected: true },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'tab-3')

  expect(result).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: true },
  ])
})

test('getUpdatedTabs returns original tabs when clicked tab is already selected', () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: true },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'tab-2')

  expect(result).toBe(tabs)
  expect(result).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: true },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ])
})

test('getUpdatedTabs returns original tabs when first tab is already selected', () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab 1', selected: true },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'tab-1')

  expect(result).toBe(tabs)
  expect(result).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: true },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: false },
  ])
})

test('getUpdatedTabs returns original tabs when last tab is already selected', () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: true },
  ]

  const result = getUpdatedTabs(tabs, 'tab-3')

  expect(result).toBe(tabs)
  expect(result).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: false },
    { id: 'tab-3', label: 'Tab 3', selected: true },
  ])
})

test('getUpdatedTabs handles non-existent tab id', () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab 1', selected: true },
    { id: 'tab-2', label: 'Tab 2', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'non-existent-tab')

  expect(result).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: false },
  ])
})

test('getUpdatedTabs handles empty tabs array', () => {
  const tabs: readonly { id: string; label: string; selected: boolean }[] = []

  const result = getUpdatedTabs(tabs, 'any-tab')

  expect(result).toEqual([])
})

test('getUpdatedTabs handles single tab', () => {
  const tabs = [{ id: 'single-tab', label: 'Single Tab', selected: false }]

  const result = getUpdatedTabs(tabs, 'single-tab')

  expect(result).toEqual([{ id: 'single-tab', label: 'Single Tab', selected: true }])
})

test('getUpdatedTabs returns original tabs when single tab is already selected', () => {
  const tabs = [{ id: 'single-tab', label: 'Single Tab', selected: true }]

  const result = getUpdatedTabs(tabs, 'single-tab')

  expect(result).toBe(tabs)
  expect(result).toEqual([{ id: 'single-tab', label: 'Single Tab', selected: true }])
})

test('getUpdatedTabs handles case-sensitive matching', () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab 1', selected: true },
    { id: 'tab-1-lower', label: 'tab 1', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'tab-1-lower')

  expect(result).toEqual([
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-1-lower', label: 'tab 1', selected: true },
  ])
})

test('getUpdatedTabs returns new array without mutating input when change is needed', () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab 1', selected: false },
    { id: 'tab-2', label: 'Tab 2', selected: true },
  ]

  const result = getUpdatedTabs(tabs, 'tab-1')

  expect(result).not.toBe(tabs)
  expect(result[0]).not.toBe(tabs[0])
  expect(result[1]).not.toBe(tabs[1])
})
