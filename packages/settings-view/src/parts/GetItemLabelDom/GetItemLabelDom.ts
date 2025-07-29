import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getItemLabelDom = (domId: string, label: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Label,
      htmlFor: domId,
      childCount: 1,
      className: 'Label',
    },
    text(label),
  ]
}
