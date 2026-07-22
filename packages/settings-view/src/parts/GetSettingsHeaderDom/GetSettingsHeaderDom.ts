import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsInputBadgeDom } from '../GetSettingsInputBadgeDom/GetSettingsInputBadgeDom.ts'
import { getSettingsInputButtonsDom } from '../GetSettingsInputButtonsDom/GetSettingsInputButtonsDom.ts'
import { getSettingsInputDom } from '../GetSettingsInputDom/GetSettingsInputDom.ts'

const settingsHeaderNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.SettingsHeader,
  type: VirtualDomElements.Div,
}

const getChildCount = (hasSearchValue: boolean): number => {
  return hasSearchValue ? 4 : 3
}

export const getSettingsHeaderDom = (filteredSettingsCount: number, hasSearchValue: boolean): readonly VirtualDomNode[] => {
  const childCount = getChildCount(hasSearchValue)
  return [
    settingsHeaderNode,
    {
      childCount,
      className: mergeClassNames(ClassNames.SettingsInputWrapper, 'SearchField'),
      type: VirtualDomElements.Div,
    },
    ...getSettingsInputDom(),
    ...getSettingsInputBadgeDom(filteredSettingsCount, hasSearchValue),
    ...getSettingsInputButtonsDom(hasSearchValue),
  ]
}
