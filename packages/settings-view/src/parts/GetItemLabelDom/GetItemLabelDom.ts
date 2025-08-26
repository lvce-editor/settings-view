import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getItemLabelDom = (domId: string, label: string, children?: readonly VirtualDomNode[]): readonly VirtualDomNode[] => {
  if (children && children.length > 0) {
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
      className: ClassNames.Label,
    },
    { type: 3, text: label } as unknown as VirtualDomNode,
  ]
}
