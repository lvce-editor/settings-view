import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

const parent: VirtualDomNode = {
  type: VirtualDomElements.H3,
  childCount: 1,
}

export const getItemHeadingDom = (heading: string): readonly VirtualDomNode[] => {
  return [parent, text(heading)]
}
