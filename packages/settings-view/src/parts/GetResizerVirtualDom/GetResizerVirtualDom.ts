import { VirtualDomElements, VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getResizerVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: ClassNames.Resizer,
      onPointerDown: DomEventListenerFunctions.HandleResizerPointerDown,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.ResizerHighlight,
      type: VirtualDomElements.Div,
    },
  ]
}
