import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getSettingsModifiedIndicatorDom } from '../GetSettingsModifiedIndicatorDom/GetSettingsModifiedIndicatorDom.ts'

export const getItemCheckBoxVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
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
      childCount: 2,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text(heading),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemCheckBox,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: ClassNames.CheckBox,
      inputType: 'checkbox',
      childCount: 0,
      id: domId,
      name: id,
      onChange: DomEventListenerFunctions.HandleSettingChecked,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: domId,
    },
    text(description),
  ]
}
