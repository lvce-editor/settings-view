import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getSettingsModifiedIndicatorDom } from '../GetSettingsModifiedIndicatorDom/GetSettingsModifiedIndicatorDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemNumberVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id, modified } = item
  const domId = getInputId(id)
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
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]
}
