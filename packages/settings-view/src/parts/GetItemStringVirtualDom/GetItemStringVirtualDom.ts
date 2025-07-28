import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemStringVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description } = item
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
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
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'text',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
    },
  ]
}
