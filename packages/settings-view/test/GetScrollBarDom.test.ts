import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getScrollBarDom } from '../src/parts/GetScrollBarDom/GetScrollBarDom.ts'

test('getScrollBarDom returns scrollbar with thumb', () => {
  const thumbHeight = 40
  const thumbTop = 120
  const result = getScrollBarDom(thumbHeight, thumbTop)

  expect(result).toEqual([
    {
      childCount: 1,
      className: `${ClassNames.SettingsScrollBar} ${ClassNames.SettingsScrollBarSmall}`,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.SettingsScrollBarThumb,
      height: `${thumbHeight}px`,
      top: `${thumbTop}px`,
      type: VirtualDomElements.Div,
    },
  ])
})

test('getScrollBarDom with zero sizes', () => {
  const result = getScrollBarDom(0, 0)
  expect(result).toEqual([
    {
      childCount: 1,
      className: `${ClassNames.SettingsScrollBar} ${ClassNames.SettingsScrollBarSmall}`,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.SettingsScrollBarThumb,
      height: `0px`,
      top: `0px`,
      type: VirtualDomElements.Div,
    },
  ])
})
