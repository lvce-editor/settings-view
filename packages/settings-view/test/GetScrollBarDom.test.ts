import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getScrollBarDom } from '../src/parts/GetScrollBarDom/GetScrollBarDom.ts'

test('getScrollBarDom returns scrollbar with thumb', () => {
  const result = getScrollBarDom()

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: `${ClassNames.SettingsScrollBar} ${ClassNames.SettingsScrollBarSmall}`,
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsScrollBarThumb,
    childCount: 0,
  })
})
