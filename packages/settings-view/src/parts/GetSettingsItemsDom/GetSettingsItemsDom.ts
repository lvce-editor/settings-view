import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Preferences } from '../Preferences/Preferences.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getItemVirtualDom } from '../GetItemVirtualDom/GetItemVirtualDom.ts'
import { getSettingsNoResultsDom } from '../GetSettingsNoResultsDom/GetSettingsNoResultsDom.ts'
import { getSpacerDom } from '../GetSpacerDom/GetSpacerDom.ts'

const settingsItemsNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.SettingsItems,
  onContextMenu: DomEventListenerFunctions.HandleContextMenu,
  type: VirtualDomElements.Div,
}

const getSettingsItemsChildren = (
  items: readonly DisplaySettingItem[],
  preferences: Preferences,
  topSpacerHeight: number,
  bottomSpacerHeight: number,
): readonly VirtualDomNode[] => {
  const children = items.flatMap((item) => getItemVirtualDom(item, preferences))
  if (topSpacerHeight !== 0) {
    children.unshift(...getSpacerDom(topSpacerHeight))
  }
  if (bottomSpacerHeight !== 0) {
    children.push(...getSpacerDom(bottomSpacerHeight))
  }
  return children
}

export const getSettingsItemsDom = (
  items: readonly DisplaySettingItem[],
  searchValue: string,
  preferences: Preferences = {},
  topSpacerHeight = 0,
  bottomSpacerHeight = 0,
): readonly VirtualDomNode[] => {
  if (items.length === 0 && searchValue && searchValue.trim()) {
    return getSettingsNoResultsDom(searchValue)
  }
  if (items.length === 0) {
    return [settingsItemsNode]
  }
  const hasVirtualSpacers = topSpacerHeight !== 0 || bottomSpacerHeight !== 0
  const childCount = items.length + (hasVirtualSpacers ? 2 : 0)
  return [
    {
      ...settingsItemsNode,
      childCount,
    },
    ...getSettingsItemsChildren(items, preferences, topSpacerHeight, bottomSpacerHeight),
  ]
}
