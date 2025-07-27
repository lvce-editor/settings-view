import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { getItemNumberVirtualDom } from '../GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'

export const getSettingsItemsDom = (items: readonly SettingItem[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      childCount: items.length,
    },
    ...items.flatMap(getItemNumberVirtualDom),
  ]
}
