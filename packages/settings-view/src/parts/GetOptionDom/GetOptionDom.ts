import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItemOption } from '../SettingItem/SettingItem.ts'

export const getOptionDom = (option: SettingItemOption): readonly VirtualDomNode[] => {
  const { id, label } = option
  return [
    {
      childCount: 1,
      type: VirtualDomElements.Option,
      value: id,
    },
    text(label),
  ]
}
