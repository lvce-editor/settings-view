import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getItemHeadingDom = (heading: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text(heading),
  ]
}
