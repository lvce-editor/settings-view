import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getItemVirtualDom } from '../GetItemVirtualDom/GetItemVirtualDom.ts'
import { getSettingsNoResultsDom } from '../GetSettingsNoResultsDom/GetSettingsNoResultsDom.ts'

export const getSettingsItemsDom = (items: readonly DisplaySettingItem[], searchValue: string): readonly VirtualDomNode[] => {
  if (items.length === 0 && searchValue && searchValue.trim()) {
    return getSettingsNoResultsDom(searchValue)
  }
  return [
    {
      childCount: items.length,
      className: ClassNames.SettingsItems,
      type: VirtualDomElements.Div,
    },
    ...items.flatMap(getItemVirtualDom),
  ]
}
