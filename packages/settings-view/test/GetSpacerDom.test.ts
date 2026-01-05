import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getSpacerDom } from '../src/parts/GetSpacerDom/GetSpacerDom.ts'

test('getSpacerDom returns spacer div with height', () => {
  const height = 250
  const result = getSpacerDom(height)

  expect(result).toEqual([
    {
      childCount: 0,
      className: ClassNames.SettingsItemsSpacer,
      height: `${height}px;`,
      type: VirtualDomElements.Div,
    },
  ])
})

test('getSpacerDom with zero height', () => {
  const height = 0
  const result = getSpacerDom(height)

  expect(result).toEqual([
    {
      childCount: 0,
      className: ClassNames.SettingsItemsSpacer,
      height: `0px;`,
      type: VirtualDomElements.Div,
    },
  ])
})
