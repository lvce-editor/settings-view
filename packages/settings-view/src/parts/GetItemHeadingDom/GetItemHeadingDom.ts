import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const parent: VirtualDomNode = {
  type: VirtualDomElements.H3,
  className: ClassNames.SettingsItemHeading,
  childCount: 1,
}

export const getItemHeadingDom = (heading: string): readonly VirtualDomNode[] => {
  return [parent, text(heading)]
}
