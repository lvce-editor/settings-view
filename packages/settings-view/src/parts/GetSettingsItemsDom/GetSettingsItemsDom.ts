import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getItemVirtualDom } from '../GetItemVirtualDom/GetItemVirtualDom.ts'
import { getSettingsNoResultsDom } from '../GetSettingsNoResultsDom/GetSettingsNoResultsDom.ts'

export const getSettingsItemsDom = (items: readonly DisplaySettingItem[], searchValue: string, highlightsEnabled = false): readonly VirtualDomNode[] => {
  if (items.length === 0 && searchValue && searchValue.trim()) {
    return getSettingsNoResultsDom(searchValue)
  }
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItems,
      childCount: items.length,
    },
    ...items.flatMap((item) => getItemVirtualDom(item, highlightsEnabled, searchValue)),
  ]
}
