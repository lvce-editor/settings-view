import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import { getItemCheckBoxVirtualDom } from '../GetItemCheckBoxVirtualDom/GetItemCheckBoxVirtualDom.ts'
import { getItemColorVirtualDom } from '../GetItemColorVirtualDom/GetItemColorVirtualDom.ts'
import { getItemNumberVirtualDom } from '../GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import { getItemSelectVirtualDom } from '../GetItemSelectVirtualDom/GetItemSelectVirtualDom.ts'
import { getItemStringVirtualDom } from '../GetItemStringVirtualDom/GetItemStringVirtualDom.ts'
import { getItemUnknownVirtualDom } from '../GetItemUnknownVirtualDom/GetItemUnknownVirtualDom.ts'
import { getItemUrlVirtualDom } from '../GetItemUrlDom/GetItemUrlDom.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

export interface ItemRenderer {
  (item: DisplaySettingItem, highlightsEnabled?: boolean, searchValue?: string): readonly VirtualDomNode[]
}

export const getItemRender = (type: number): ItemRenderer => {
  switch (type) {
    case SettingItemType.Number:
      return getItemNumberVirtualDom
    case SettingItemType.Boolean:
      return getItemCheckBoxVirtualDom
    case SettingItemType.String:
      return getItemStringVirtualDom
    case SettingItemType.Enum:
      return getItemSelectVirtualDom
    case SettingItemType.Color:
      return getItemColorVirtualDom
    case SettingItemType.Url:
      return getItemUrlVirtualDom
    default:
      return getItemUnknownVirtualDom
  }
}
