import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getItemLabelDom } from '../GetItemLabelDom/GetItemLabelDom.ts'

export const getItemCheckBoxVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { description, errorMessage, hasError, heading, id, modified, value } = item
  const domId = getInputId(id)
  const checkBoxClassName = hasError ? `${ClassNames.CheckBox} ${ClassNames.InputBoxError}` : ClassNames.CheckBox
  const errorChildCount = hasError ? 1 : 0
  const isChecked = value === 'true' || value === true
  const checkBoxBoxChildCount = isChecked ? 1 : 0

  return [
    {
      childCount: 2 + errorChildCount,
      className: ClassNames.SettingsItem,
      'data-modified': modified,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    ...getItemHeadingDom(heading),

    {
      childCount: 3,
      className: ClassNames.SettingsItemCheckBox,
      type: VirtualDomElements.Div,
    },
    {
      ariaChecked: isChecked,
      checked: isChecked,
      childCount: 0,
      className: checkBoxClassName,
      id: domId,
      inputType: 'checkbox',
      name: id,
      onChange: DomEventListenerFunctions.HandleSettingChecked,
      type: VirtualDomElements.Input,
    },
    {
      ariaChecked: isChecked,
      ariaLabelledBy: domId,
      childCount: checkBoxBoxChildCount,
      className: ClassNames.CheckBoxBox,
      onClick: DomEventListenerFunctions.HandleCheckboxBoxClick,
      role: AriaRoles.Checkbox,
      type: VirtualDomElements.Div,
      'data-checkbox-name': id,
      'data-checkbox-value': isChecked ? 'true' : 'false',
    },
    ...(isChecked
      ? [
          {
            childCount: 1,
            className: ClassNames.CheckBoxCheckmark,
            type: VirtualDomElements.Div,
          },
          text('✓'),
        ]
      : []),
    ...getItemLabelDom(domId, description),
    ...getErrorMessageDom(errorMessage),
  ]
}
