import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import { getItemRender } from '../GetSettingsItemRenderer/GetSettingsItemRenderer.ts'

export const getItemVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const fn = getItemRender(item.type)
  return fn(item)
}
