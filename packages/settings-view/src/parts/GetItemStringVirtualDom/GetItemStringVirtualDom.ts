import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getHighlightedTextDom } from '../GetHighlightedTextDom/GetHighlightedTextDom.ts'

export const getItemStringVirtualDom = (item: DisplaySettingItem, highlightsEnabled?: boolean, searchValue?: string): readonly VirtualDomNode[] => {
  const { heading, description, id, hasError, errorMessage } = item
  const inputClassName = hasError ? `${ClassNames.InputBox} ${ClassNames.InputBoxError}` : ClassNames.InputBox
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 3 + errorChildCount,
      role: AriaRoles.Group,
    },
    ...getItemHeadingDom(heading, highlightsEnabled, searchValue),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    ...(highlightsEnabled && searchValue ? getHighlightedTextDom(description, searchValue) : [text(description)]),
    {
      type: VirtualDomElements.Input,
      className: inputClassName,
      inputType: 'text',
      placeholder: SettingStrings.stringValue(),
      childCount: 0,
      name: id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
    ...getErrorMessageDom(errorMessage),
  ]
}
