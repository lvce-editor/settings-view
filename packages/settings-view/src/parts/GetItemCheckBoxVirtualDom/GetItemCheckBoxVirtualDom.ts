import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Preferences } from '../Preferences/Preferences.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getItemLabelDom } from '../GetItemLabelDom/GetItemLabelDom.ts'

const errorCheckBoxClassName = mergeClassNames(ClassNames.CheckBox, ClassNames.InputBoxError)
const errorToggleClassName = mergeClassNames(ClassNames.Toggle, ClassNames.InputBoxError)
const settingUseToggles = 'settings.useToggles'

const checkBoxWrapperNode: VirtualDomNode = {
  childCount: 2,
  className: ClassNames.SettingsItemCheckBox,
  type: VirtualDomElements.Div,
}

export const getItemCheckBoxVirtualDom = (item: DisplaySettingItem, preferences: Preferences = {}): readonly VirtualDomNode[] => {
  const { description, errorMessage, hasError, heading, id, modified, value } = item
  const domId = getInputId(id)
  const useToggles = preferences[settingUseToggles] !== false && preferences[settingUseToggles] !== 'false'
  let checkBoxClassName = useToggles ? ClassNames.Toggle : ClassNames.CheckBox
  if (hasError) {
    checkBoxClassName = useToggles ? errorToggleClassName : errorCheckBoxClassName
  }
  const errorChildCount = hasError ? 1 : 0
  const currentValue = preferences[id] ?? value
  const isChecked = currentValue === true || currentValue === 'true'

  return [
    {
      childCount: 2 + errorChildCount,
      className: ClassNames.SettingsItem,
      'data-modified': modified,
      name: id,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    ...getItemHeadingDom(heading),

    checkBoxWrapperNode,
    {
      checked: isChecked,
      childCount: 0,
      className: checkBoxClassName,
      id: domId,
      inputType: 'checkbox',
      name: id,
      onChange: DomEventListenerFunctions.HandleSettingChecked,
      type: VirtualDomElements.Input,
    },
    ...getItemLabelDom(domId, description),
    ...getErrorMessageDom(errorMessage),
  ]
}
