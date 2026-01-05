import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getItemLabelDom } from '../GetItemLabelDom/GetItemLabelDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemStringVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { description, errorMessage, hasError, heading, id } = item
  const domId = getInputId(id)
  const inputClassName = hasError ? `${ClassNames.InputBox} ${ClassNames.InputBoxError}` : ClassNames.InputBox
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      childCount: 3 + errorChildCount,
      className: ClassNames.SettingsItem,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    ...getItemHeadingDom(heading),
    ...getItemLabelDom(domId, description),
    {
      childCount: 0,
      className: inputClassName,
      id: domId,
      inputType: 'text',
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.stringValue(),
      type: VirtualDomElements.Input,
    },
    ...getErrorMessageDom(errorMessage),
  ]
}
