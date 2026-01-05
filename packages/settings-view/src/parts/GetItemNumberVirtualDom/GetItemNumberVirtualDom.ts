import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getItemLabelDom } from '../GetItemLabelDom/GetItemLabelDom.ts'
import { getSettingsModifiedIndicatorDom } from '../GetSettingsModifiedIndicatorDom/GetSettingsModifiedIndicatorDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

const getChildCount = (modified: boolean, hasError: boolean): number => {
  const modifiedChildCount = modified ? 1 : 0
  const errorChildCount = hasError ? 1 : 0
  const childCount = 3 + modifiedChildCount + errorChildCount
  return childCount
}

const getInputClassName = (hasError: boolean): string => {
  if (hasError) {
    return `${ClassNames.InputBox} ${ClassNames.InputBoxError}`
  }
  return ClassNames.InputBox
}

export const getItemNumberVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { description, errorMessage, hasError, heading, id, modified } = item
  const domId = getInputId(id)
  const inputClassName = getInputClassName(hasError)
  const childCount = getChildCount(modified, hasError)

  return [
    {
      childCount,
      className: ClassNames.SettingsItem,
      'data-modified': modified,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    ...getSettingsModifiedIndicatorDom(modified),
    ...getItemHeadingDom(heading),
    ...getItemLabelDom(domId, description),
    {
      childCount: 0,
      className: inputClassName,
      id: domId,
      inputType: 'number',
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.numberValue(),
      type: VirtualDomElements.Input,
    },
    ...getErrorMessageDom(errorMessage),
  ]
}
