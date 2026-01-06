import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const parent: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.SettingsItemHeading,
  type: VirtualDomElements.H3,
}

export const getItemHeadingDom = (heading: string): readonly VirtualDomNode[] => {
  return [parent, text(heading)]
}
