import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { getItemNumberVirtualDom } from '../GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import { getSettingsNoResultsDom } from '../GetSettingsNoResultsDom/GetSettingsNoResultsDom.ts'

export const getSettingsItemsDom = (items: readonly SettingItem[], searchValue: string): readonly VirtualDomNode[] => {
  if (items.length === 0 && searchValue.trim()) {
    return getSettingsNoResultsDom(searchValue)
  }
  return [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItems',
      childCount: items.length,
    },
    ...items.flatMap(getItemNumberVirtualDom),
  ]
}
