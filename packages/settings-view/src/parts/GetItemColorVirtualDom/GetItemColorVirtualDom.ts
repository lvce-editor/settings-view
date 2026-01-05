import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getItemLabelDom } from '../GetItemLabelDom/GetItemLabelDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemColorVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { description, errorMessage, hasError, heading, id, modified } = item
  const domId = getInputId(id)
  const colorInputClassName = hasError ? mergeClassNames('ColorInput', ClassNames.InputBoxError) : mergeClassNames('ColorInput')
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      childCount: 3 + errorChildCount,
      className: ClassNames.SettingsItem,
      'data-modified': modified,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    ...getItemHeadingDom(heading),

    {
      childCount: 2,
      className: ClassNames.SettingsItemCheckBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: colorInputClassName,
      id: domId,
      inputType: 'color',
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.colorValue(),
      type: VirtualDomElements.Input,
    },
    ...getItemLabelDom(domId, description),
    ...getErrorMessageDom(errorMessage),
  ]
}
