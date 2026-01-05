import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getScrollBarDom } from '../src/parts/GetScrollBarDom/GetScrollBarDom.ts'

test('getScrollBarDom returns scrollbar with thumb', () => {
  const thumbHeight = 40
  const thumbTop = 120
  const result = getScrollBarDom(thumbHeight, thumbTop)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    childCount: 1,
    className: `${ClassNames.SettingsScrollBar} ${ClassNames.SettingsScrollBarSmall}`,
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual({
    childCount: 0,
    className: ClassNames.SettingsScrollBarThumb,
    height: `${thumbHeight}px`,
    top: `${thumbTop}px`,
    type: VirtualDomElements.Div,
  })
})

test('getScrollBarDom with zero sizes', () => {
  const result = getScrollBarDom(0, 0)
  expect(result).toHaveLength(2)
  expect(result[1]).toEqual({
    childCount: 0,
    className: ClassNames.SettingsScrollBarThumb,
    height: `0px`,
    top: `0px`,
    type: VirtualDomElements.Div,
  })
})
