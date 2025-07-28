import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getOptionDom } from '../GetOptionDom/GetOptionDom.ts'
import { getSettingsModifiedIndicatorDom } from '../GetSettingsModifiedIndicatorDom/GetSettingsModifiedIndicatorDom.ts'

export const getItemSelectVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id, options = [], modified } = item
  const isModified = modified || false

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: isModified ? 2 : 1,
      role: 'group',
    },
    ...getSettingsModifiedIndicatorDom(isModified),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
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
      className: ClassNames.Select,
      childCount: options.length,
      name: id,
      onChange: DomEventListenerFunctions.HandleSettingSelect,
    },
    ...options.flatMap(getOptionDom),
  ]
}
