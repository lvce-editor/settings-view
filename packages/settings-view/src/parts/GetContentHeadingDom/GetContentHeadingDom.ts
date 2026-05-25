import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const parentNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.SettingsContentHeading,
  type: VirtualDomElements.H1,
}

export const getContentHeadingDom = (headerText: string): readonly VirtualDomNode[] => {
  return [parentNode, text(headerText)]
}
