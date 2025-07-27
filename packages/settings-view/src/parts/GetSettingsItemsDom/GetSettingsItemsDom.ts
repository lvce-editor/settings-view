import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { getItemNumberVirtualDom } from '../GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsItemsDom = (items: readonly SettingItem[], searchValue: string): readonly VirtualDomNode[] => {
  if (items.length === 0 && searchValue.trim()) {
    return [
      {
        type: VirtualDomElements.Div,
        className: 'SettingsItems',
        childCount: 1,
      },
      {
        type: VirtualDomElements.Div,
        className: 'SettingsNoResults',
        childCount: 1,
      },
      text(SettingStrings.noSettingsMatching(searchValue)),
    ]
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
