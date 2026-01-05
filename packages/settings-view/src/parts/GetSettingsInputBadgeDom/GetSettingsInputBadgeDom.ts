import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { matchingSettings } from '../SettingStrings/SettingStrings.ts'

export const getSettingsInputBadgeDom = (filteredSettingsCount: number, hasSearchValue: boolean): readonly VirtualDomNode[] => {
  if (!hasSearchValue) {
    return []
  }
  const badgeText = matchingSettings(filteredSettingsCount)
  return [
    {
      childCount: 1,
      className: ClassNames.InputBadge,
      type: VirtualDomElements.Div,
    },
    text(badgeText),
  ]
}
