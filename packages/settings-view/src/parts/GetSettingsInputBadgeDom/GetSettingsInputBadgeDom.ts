import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { matchingSettings } from '../SettingStrings/SettingStrings.ts'

export const getSettingsInputBadgeDom = (filteredSettingsCount: number): readonly VirtualDomNode[] => {
  const badgeText = matchingSettings(filteredSettingsCount)
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.Badge,
      childCount: 1,
    },
    text(badgeText),
  ]
}
