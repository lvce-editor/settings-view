import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getItemLabelDom } from '../GetItemLabelDom/GetItemLabelDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemColorVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id, modified } = item
  const domId = getInputId(id)
  const isModified = modified || false
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 3,
      role: 'group',
      'data-modified': isModified,
    },
    ...getItemHeadingDom(heading),
    ...getItemLabelDom(domId, description),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'color',
      placeholder: SettingStrings.colorValue(),
      childCount: 0,
      id: domId,
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]
}
