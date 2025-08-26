import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const parent: VirtualDomNode = {
  type: VirtualDomElements.H3,
  className: ClassNames.SettingsItemHeading,
  childCount: 1,
}

export const getItemHeadingDom = (heading: string, children?: readonly VirtualDomNode[]): readonly VirtualDomNode[] => {
  if (children && children.length > 0) {
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
