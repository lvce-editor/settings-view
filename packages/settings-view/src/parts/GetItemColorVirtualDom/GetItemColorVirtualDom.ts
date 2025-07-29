import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
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

    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemCheckBox,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: mergeClassNames('ColorInput'),
      inputType: 'color',
      placeholder: SettingStrings.colorValue(),
      childCount: 0,
      id: domId,
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
    ...getItemLabelDom(domId, description),
  ]
}
