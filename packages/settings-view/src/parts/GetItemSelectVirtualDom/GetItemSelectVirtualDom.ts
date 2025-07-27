import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'

const getOptionDom = (option: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Option,
      childCount: 1,
    },
    text(option),
  ]
}

export const getItemSelectVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description } = item
  const options = ['1', '2', '3']
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
      childCount: options.length,
    },
    ...options.flatMap(getOptionDom),
  ]
}
