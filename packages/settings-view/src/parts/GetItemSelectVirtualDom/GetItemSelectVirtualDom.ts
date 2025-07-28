import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getOptionDom } from '../GetOptionDom/GetOptionDom.ts'

export const getItemSelectVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id } = item
  const options = item.options || []
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 3,
      role: 'group',
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
      className: ClassNames.Select,
      childCount: options.length,
      name: id,
    },
    ...options.flatMap(getOptionDom),
  ]
}
