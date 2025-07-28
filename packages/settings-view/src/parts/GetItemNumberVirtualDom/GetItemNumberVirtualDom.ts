import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemNumberVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id } = item
  const domId = getInputId(id)
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
      type: VirtualDomElements.Label,
      htmlFor: domId,
      childCount: 1,
      className: 'Label',
    },
    text(description),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: domId,
    },
  ]
}
