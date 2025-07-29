import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getSettingsModifiedIndicatorDom } from '../src/parts/GetSettingsModifiedIndicatorDom/GetSettingsModifiedIndicatorDom.ts'

test('getSettingsModifiedIndicatorDom returns empty array when isModified is false', () => {
  const result = getSettingsModifiedIndicatorDom(false)
  expect(result).toEqual([])
})

test('getSettingsModifiedIndicatorDom returns modified indicator when isModified is true', () => {
  const result = getSettingsModifiedIndicatorDom(true)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ModifiedIndicator,
      childCount: 0,
    },
  ])
})
