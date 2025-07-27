import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getSettingsInputBadgeDom = (filteredSettingsCount: number): readonly VirtualDomNode[] => {
  const badgeText = `${filteredSettingsCount} matching settings`
  return [
    {
      type: VirtualDomElements.Div,
      className: 'Badge',
      childCount: 1,
    },
    text(badgeText),
  ]
}
