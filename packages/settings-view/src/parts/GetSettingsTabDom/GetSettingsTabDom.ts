import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getTabVirtualDom = (tab: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text(tab),
  ]
}
