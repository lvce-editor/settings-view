import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: mergeClassNames(ClassNames.SettingsScrollBar, ClassNames.SettingsScrollBarSmall),
  childCount: 1,
}

export const getScrollBarDom = (): readonly VirtualDomNode[] => {
  return [
    parentNode,
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsScrollBarThumb,
      childCount: 0,
    },
  ]
}
