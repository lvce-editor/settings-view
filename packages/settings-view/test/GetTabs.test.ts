import { test, expect } from '@jest/globals'
import { getTabs } from '../src/parts/GetTabs/GetTabs.ts'

test('getTabs should return the correct array of tab objects', () => {
  const result = getTabs()

  expect(result).toEqual([
    { label: 'Text Editor', selected: true },
    { label: 'Workbench', selected: false },
    { label: 'Window', selected: false },
    { label: 'Features', selected: false },
    { label: 'Applications', selected: false },
    { label: 'Security', selected: false },
    { label: 'Extensions', selected: false },
  ])
})

test('getTabs should return readonly array', () => {
  const result = getTabs()

  expect(result).toBeInstanceOf(Array)
  expect(result).toHaveLength(7)
})

test('getTabs should have first tab selected', () => {
  const result = getTabs()

  expect(result[0].selected).toBe(true)
  expect(result[1].selected).toBe(false)
})
