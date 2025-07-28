import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsInputBadgeDom } from '../GetSettingsInputBadgeDom/GetSettingsInputBadgeDom.ts'
import { getSettingsInputButtonsDom } from '../GetSettingsInputButtonsDom/GetSettingsInputButtonsDom.ts'
import { getSettingsInputDom } from '../GetSettingsInputDom/GetSettingsInputDom.ts'

const getChildCount = (hasSearchValue: boolean): number => {
  return hasSearchValue ? 3 : 2
}

export const getSettingsHeaderDom = (filteredSettingsCount: number, hasSearchValue: boolean): readonly VirtualDomNode[] => {
  const badgeDom = getSettingsInputBadgeDom(filteredSettingsCount, hasSearchValue)
  const childCount = getChildCount(hasSearchValue)

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsHeader,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsInputWrapper,
      childCount,
    },
    ...getSettingsInputDom(),
    ...getSettingsInputButtonsDom(),
    ...badgeDom,
  ]
}
