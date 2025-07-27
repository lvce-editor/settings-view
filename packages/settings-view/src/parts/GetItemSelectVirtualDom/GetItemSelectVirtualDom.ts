import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { getOptionDom } from '../GetOptionDom/GetOptionDom.ts'

export const getItemSelectVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description } = item
  const options = item.options || []
  return [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text(heading),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text(description),
    {
      type: VirtualDomElements.Select,
      className: 'Select',
      childCount: options.length,
    },
    ...options.flatMap(getOptionDom),
  ]
}
