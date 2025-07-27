import { expect, test } from '@jest/globals'
import { mergeClassNames } from '@lvce-editor/virtual-dom-worker'
import { getTabClassName } from '../src/parts/GetTabClassName/GetTabClassName.ts'

test('getTabClassName returns Tab class for non-selected tab', () => {
  const tab = { id: 'test-tab', label: 'Test Tab', selected: false }
  const className = getTabClassName(tab)
  expect(className).toBe('Tab')
})

test('getTabClassName returns merged classes for selected tab', () => {
  const tab = { id: 'selected-tab', label: 'Test Tab', selected: true }
  const className = getTabClassName(tab)
  const expectedClassName = mergeClassNames('Tab', 'TabSelected')
  expect(className).toBe(expectedClassName)
})