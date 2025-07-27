import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { getSettingsItemsDom } from '../GetSettingsItemsDom/GetSettingsItemsDom.ts'

export const getSettingsContentDom = (items: readonly SettingItem[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsContent',
      childCount: 2,
    },
    {
      type: VirtualDomElements.H1,
      childCount: 1,
    },
    text('Settings Content'),
    ...getSettingsItemsDom(items),
  ]
}
