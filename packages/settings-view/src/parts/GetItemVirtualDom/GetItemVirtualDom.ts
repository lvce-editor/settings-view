import { type VirtualDomNode, text } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { getItemCheckBoxVirtualDom } from '../GetItemCheckBoxVirtualDom/GetItemCheckBoxVirtualDom.ts'
import { getItemNumberVirtualDom } from '../GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

export const getItemVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  if (item.type === SettingItemType.Number) {
    return getItemNumberVirtualDom(item)
  }
  if (item.type === SettingItemType.Boolean) {
    return getItemCheckBoxVirtualDom(item)
  }
  if (item.type === SettingItemType.String) {
    return getItemNumberVirtualDom(item) // TODO
  }
  // TODO
  return [text('unknown setting type')]
}
