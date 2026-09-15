import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Preferences } from '../Preferences/Preferences.ts'
import { getItemRender } from '../GetSettingsItemRenderer/GetSettingsItemRenderer.ts'

export const getItemVirtualDom = (item: DisplaySettingItem, preferences?: Preferences): readonly VirtualDomNode[] => {
  const fn = getItemRender(item.type)
  return fn(item, preferences)
}
