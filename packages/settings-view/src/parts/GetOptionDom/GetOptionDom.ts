import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getOptionDom = (option: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Option,
      childCount: 1,
    },
    text(option),
  ]
}
