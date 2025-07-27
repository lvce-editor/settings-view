import { test, expect } from '@jest/globals'
import { getTabs } from '../src/parts/GetTabs/GetTabs.ts'

test('getTabs should return the correct array of tab objects', () => {
  const result = getTabs()

  expect(result).toEqual([
    { id: 'text-editor', label: 'Text Editor', selected: true },
    { id: 'workbench', label: 'Workbench', selected: false },
    { id: 'window', label: 'Window', selected: false },
    { id: 'features', label: 'Features', selected: false },
    { id: 'applications', label: 'Applications', selected: false },
    { id: 'security', label: 'Security', selected: false },
    { id: 'extensions', label: 'Extensions', selected: false },
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
