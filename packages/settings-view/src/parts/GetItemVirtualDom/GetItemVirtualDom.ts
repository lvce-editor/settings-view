import { type VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { getItemCheckBoxVirtualDom } from '../GetItemCheckBoxVirtualDom/GetItemCheckBoxVirtualDom.ts'
import { getItemNumberVirtualDom } from '../GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import { getItemSelectVirtualDom } from '../GetItemSelectVirtualDom/GetItemSelectVirtualDom.ts'
import { getItemStringVirtualDom } from '../GetItemStringVirtualDom/GetItemStringVirtualDom.ts'
import { getItemUnknownVirtualDom } from '../GetItemUnknownVirtualDom/GetItemUnknownVirtualDom.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

export const getItemVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  if (item.type === SettingItemType.Number) {
    return getItemNumberVirtualDom(item)
  }
  if (item.type === SettingItemType.Boolean) {
    return getItemCheckBoxVirtualDom(item)
  }
  if (item.type === SettingItemType.String) {
    return getItemStringVirtualDom(item)
  }
  if (item.type === SettingItemType.Enum) {
    return getItemSelectVirtualDom(item)
  }
  return getItemUnknownVirtualDom()
}
