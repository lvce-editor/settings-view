import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getItemLabelDom } from '../GetItemLabelDom/GetItemLabelDom.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemStringVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id, hasError, errorMessage } = item
  const domId = getInputId(id)
  const inputClassName = hasError ? `${ClassNames.InputBox} ${ClassNames.InputBoxError}` : ClassNames.InputBox
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 3 + errorChildCount,
      role: AriaRoles.Group,
    },
    ...getItemHeadingDom(heading),
    ...getItemLabelDom(domId, description),
    {
      type: VirtualDomElements.Input,
      className: inputClassName,
      inputType: 'text',
      placeholder: SettingStrings.stringValue(),
      childCount: 0,
      id: domId,
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
    ...getErrorMessageDom(errorMessage),
  ]
}
