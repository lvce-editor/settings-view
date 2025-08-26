import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getSpacerDom } from '../src/parts/GetSpacerDom/GetSpacerDom.ts'

test('getSpacerDom returns spacer div with height', () => {
  const height = 250
  const result = getSpacerDom(height)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItemsSpacer,
    childCount: 0,
    height: `${height}px;`,
  })
})

test('getSpacerDom with zero height', () => {
  const height = 0
  const result = getSpacerDom(height)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItemsSpacer,
    childCount: 0,
    height: `0px;`,
  })
})
