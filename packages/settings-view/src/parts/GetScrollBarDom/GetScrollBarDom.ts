import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const parentNode: VirtualDomNode = {
  childCount: 1,
  className: mergeClassNames(ClassNames.SettingsScrollBar, ClassNames.SettingsScrollBarSmall),
  type: VirtualDomElements.Div,
}

export const getScrollBarDom = (thumbHeight: number, thumbTop: number): readonly VirtualDomNode[] => {
  return [
    parentNode,
    {
      childCount: 0,
      className: ClassNames.SettingsScrollBarThumb,
      height: `${thumbHeight}px`,
      top: `${thumbTop}px`,
      type: VirtualDomElements.Div,
    },
  ]
}
