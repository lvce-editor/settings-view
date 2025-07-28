import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getSettingsInputBadgeDom = (filteredSettingsCount: number): readonly VirtualDomNode[] => {
  const badgeText = `${filteredSettingsCount} matching settings`
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.Badge,
      childCount: 1,
    },
    text(badgeText),
  ]
}
