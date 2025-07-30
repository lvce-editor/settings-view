import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
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

export const getItemNumberVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id, modified, hasError, errorMessage } = item
  const domId = getInputId(id)
  const inputClassName = hasError ? `${ClassNames.InputBox} ${ClassNames.InputBoxError}` : ClassNames.InputBox
  const childCount = getChildCount(modified, hasError)

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount,
      role: 'group',
      'data-modified': modified,
    },
    ...getSettingsModifiedIndicatorDom(modified),
    ...getItemHeadingDom(heading),
    ...getItemLabelDom(domId, description),
    {
      type: VirtualDomElements.Input,
      className: inputClassName,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: domId,
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
    ...getErrorMessageDom(errorMessage),
  ]
}
