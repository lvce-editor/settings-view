import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getHighlightedTextDom } from '../GetHighlightedTextDom/GetHighlightedTextDom.ts'

<<<<<<< Updated upstream
export const getItemLabelDom = (domId: string, label: string, highlightsEnabled?: boolean, searchValue?: string): readonly VirtualDomNode[] => {
  if (highlightsEnabled && searchValue) {
    const children = getHighlightedTextDom(label, searchValue)
=======
export const getItemLabelDom = (domId: string, label: string, children?: readonly VirtualDomNode[]): readonly VirtualDomNode[] => {
  if (children && children.length > 0) {
>>>>>>> Stashed changes
    return [
      {
        type: VirtualDomElements.Label,
        htmlFor: domId,
        childCount: children.length,
        className: 'Label',
      },
      ...children,
    ]
  }
  return [
    {
      type: VirtualDomElements.Label,
      htmlFor: domId,
      childCount: 1,
      className: 'Label',
    },
    { type: 3, text: label } as unknown as VirtualDomNode,
  ]
}
