import { expect, test } from '@jest/globals'
import { getUpdatedTabs } from '../src/parts/GetUpdatedTabs/GetUpdatedTabs.ts'

test('getUpdatedTabs selects the first tab when clicked', () => {
  const tabs = [
    { label: 'Tab 1', selected: false },
    { label: 'Tab 2', selected: true },
    { label: 'Tab 3', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'Tab 1')

  expect(result).toEqual([
    { label: 'Tab 1', selected: true },
    { label: 'Tab 2', selected: false },
    { label: 'Tab 3', selected: false },
  ])
})

test('getUpdatedTabs selects the middle tab when clicked', () => {
  const tabs = [
    { label: 'Tab 1', selected: true },
    { label: 'Tab 2', selected: false },
    { label: 'Tab 3', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'Tab 2')

  expect(result).toEqual([
    { label: 'Tab 1', selected: false },
    { label: 'Tab 2', selected: true },
    { label: 'Tab 3', selected: false },
  ])
})

test('getUpdatedTabs selects the last tab when clicked', () => {
  const tabs = [
    { label: 'Tab 1', selected: true },
    { label: 'Tab 2', selected: false },
    { label: 'Tab 3', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'Tab 3')

  expect(result).toEqual([
    { label: 'Tab 1', selected: false },
    { label: 'Tab 2', selected: false },
    { label: 'Tab 3', selected: true },
  ])
})

test('getUpdatedTabs handles non-existent tab name', () => {
  const tabs = [
    { label: 'Tab 1', selected: true },
    { label: 'Tab 2', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'Non-existent Tab')

  expect(result).toEqual([
    { label: 'Tab 1', selected: false },
    { label: 'Tab 2', selected: false },
  ])
})

test('getUpdatedTabs handles empty tabs array', () => {
  const tabs: readonly { label: string; selected: boolean }[] = []

  const result = getUpdatedTabs(tabs, 'Any Tab')

  expect(result).toEqual([])
})

test('getUpdatedTabs handles single tab', () => {
  const tabs = [{ label: 'Single Tab', selected: false }]

  const result = getUpdatedTabs(tabs, 'Single Tab')

  expect(result).toEqual([{ label: 'Single Tab', selected: true }])
})

test('getUpdatedTabs handles case-sensitive matching', () => {
  const tabs = [
    { label: 'Tab 1', selected: true },
    { label: 'tab 1', selected: false },
  ]

  const result = getUpdatedTabs(tabs, 'tab 1')

  expect(result).toEqual([
    { label: 'Tab 1', selected: false },
    { label: 'tab 1', selected: true },
  ])
})

test('getUpdatedTabs returns new array without mutating input', () => {
  const tabs = [
    { label: 'Tab 1', selected: false },
    { label: 'Tab 2', selected: true },
  ]

  const result = getUpdatedTabs(tabs, 'Tab 1')

  expect(result).not.toBe(tabs)
  expect(result[0]).not.toBe(tabs[0])
  expect(result[1]).not.toBe(tabs[1])
})
