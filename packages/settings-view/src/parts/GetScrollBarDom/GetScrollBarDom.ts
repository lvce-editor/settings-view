import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getScrollBarDom = (thumbHeight: number, thumbTop: number): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsScrollBar,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsScrollBarThumb,
      childCount: 0,
      height: `${thumbHeight}px`,
      top: `${thumbTop}px;`,
    },
  ]
}


