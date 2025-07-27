import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { SettingItemOption } from '../SettingItem/SettingItem.ts'

export const getOptionDom = (option: SettingItemOption): readonly VirtualDomNode[] => {
  const { id, label } = option
  return [
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: id,
    },
    text(label),
  ]
}
