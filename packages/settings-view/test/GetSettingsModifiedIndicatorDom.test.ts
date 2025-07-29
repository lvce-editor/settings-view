import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getSettingsModifiedIndicatorDom } from '../src/parts/GetSettingsModifiedIndicatorDom/GetSettingsModifiedIndicatorDom.ts'

test('getSettingsModifiedIndicatorDom returns correct virtual DOM structure', () => {
  const result = getSettingsModifiedIndicatorDom()

  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ModifiedIndicator,
      childCount: 1,
    },
  ])
})

test('getSettingsModifiedIndicatorDom returns array', () => {
  const result = getSettingsModifiedIndicatorDom()

  expect(Array.isArray(result)).toBe(true)
})
