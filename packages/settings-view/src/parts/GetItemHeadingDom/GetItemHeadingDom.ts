import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getHighlightedTextDom } from '../GetHighlightedTextDom/GetHighlightedTextDom.ts'

const parent: VirtualDomNode = {
  type: VirtualDomElements.H3,
  childCount: 1,
}

export const getItemHeadingDom = (heading: string, highlightsEnabled?: boolean, searchValue?: string): readonly VirtualDomNode[] => {
  if (highlightsEnabled && searchValue) {
    const children = getHighlightedTextDom(heading, searchValue)
    return [
      {
        ...parent,
        childCount: children.length,
      },
      ...children,
    ]
  }
  return [parent, text(heading)]
}
