import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'

export const getItemCheckBoxVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id, modified, hasError, errorMessage } = item
  const domId = getInputId(id)
  const checkBoxClassName = hasError ? `${ClassNames.CheckBox} ${ClassNames.InputBoxError}` : ClassNames.CheckBox
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 3 + errorChildCount,
      role: AriaRoles.Group,
      'data-modified': modified,
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
      className: checkBoxClassName,
      childCount: 0,
      id: domId,
      inputType: 'checkbox',
      name: id,
      onChange: DomEventListenerFunctions.HandleSettingChecked,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: domId,
    },
    text(description),
    ...getErrorMessageDom(errorMessage),
  ]
}
