import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getItemVirtualDom } from '../GetItemVirtualDom/GetItemVirtualDom.ts'
import { getSettingsNoResultsDom } from '../GetSettingsNoResultsDom/GetSettingsNoResultsDom.ts'
import type { Preferences } from '../Preferences/Preferences.ts'

export const getSettingsItemsDom = (
  items: readonly DisplaySettingItem[],
  searchValue: string,
  preferences: Preferences = {},
): readonly VirtualDomNode[] => {
  if (items.length === 0 && searchValue && searchValue.trim()) {
    return getSettingsNoResultsDom(searchValue)
  }
  return [
    {
      childCount: items.length,
      className: ClassNames.SettingsItems,
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      type: VirtualDomElements.Div,
    },
    ...items.flatMap((item) => getItemVirtualDom(item, preferences)),
  ]
}
