import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'

export const getItemCheckBoxVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description } = item
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
      type: VirtualDomElements.Div,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: 'CheckBox',
      inputType: 'checkbox',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
    },
    text('Check '),
  ]
}
