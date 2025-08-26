import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getHighlightedTextDom } from '../GetHighlightedTextDom/GetHighlightedTextDom.ts'

export const getItemLabelDom = (domId: string, label: string, highlightsEnabled?: boolean, searchValue?: string): readonly VirtualDomNode[] => {
  if (highlightsEnabled && searchValue) {
    const children = getHighlightedTextDom(label, searchValue)
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
