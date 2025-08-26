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

<<<<<<< Updated upstream
export const getItemUrlVirtualDom = (item: DisplaySettingItem, highlightsEnabled?: boolean, searchValue?: string): readonly VirtualDomNode[] => {
  const { heading, description, id, modified, hasError, errorMessage } = item
=======
export const getItemUrlVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id, modified, hasError, errorMessage, headingChildren, descriptionChildren } = item
>>>>>>> Stashed changes
  const domId = getInputId(id)
  const inputClassName = hasError ? `${ClassNames.InputBox} ${ClassNames.InputBoxError}` : ClassNames.InputBox
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 3 + errorChildCount,
      role: AriaRoles.Group,
      'data-modified': modified,
    },
<<<<<<< Updated upstream
    ...getItemHeadingDom(heading, highlightsEnabled, searchValue),
    ...getItemLabelDom(domId, description, highlightsEnabled, searchValue),
=======
    ...getItemHeadingDom(heading, headingChildren as readonly VirtualDomNode[] | undefined),
    ...getItemLabelDom(domId, description, descriptionChildren as readonly VirtualDomNode[] | undefined),
>>>>>>> Stashed changes
    {
      type: VirtualDomElements.Input,
      className: inputClassName,
      inputType: 'url',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: domId,
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
    ...getErrorMessageDom(errorMessage),
  ]
}
