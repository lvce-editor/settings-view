import { test, expect } from '@jest/globals'
import { getTabs } from '../src/parts/GetTabs/GetTabs.ts'

test('getTabs should return the correct array of tab names', () => {
  const result = getTabs()

  expect(result).toEqual(['Text Editor', 'Workbench', 'Window', 'Features', 'Applications', 'Security', 'Extensions'])
})

test('getTabs should return readonly array', () => {
  const result = getTabs()

  expect(result).toBeInstanceOf(Array)
  expect(result).toHaveLength(7)
})
