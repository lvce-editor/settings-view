import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getHighlightedTextDom } from '../GetHighlightedTextDom/GetHighlightedTextDom.ts'

<<<<<<< Updated upstream
export const getItemStringVirtualDom = (item: DisplaySettingItem, highlightsEnabled?: boolean, searchValue?: string): readonly VirtualDomNode[] => {
  const { heading, description, id, hasError, errorMessage } = item
=======
export const getItemStringVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id, hasError, errorMessage, headingChildren, descriptionChildren } = item
>>>>>>> Stashed changes
  const inputClassName = hasError ? `${ClassNames.InputBox} ${ClassNames.InputBoxError}` : ClassNames.InputBox
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 3 + errorChildCount,
      role: AriaRoles.Group,
    },
<<<<<<< Updated upstream
    ...getItemHeadingDom(heading, highlightsEnabled, searchValue),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    ...(highlightsEnabled && searchValue ? getHighlightedTextDom(description, searchValue) : [text(description)]),
=======
    ...(headingChildren && headingChildren.length
      ? [
          {
            type: VirtualDomElements.H3,
            childCount: headingChildren.length,
          },
          ...headingChildren,
        ]
      : [
          {
            type: VirtualDomElements.H3,
            childCount: 1,
          },
          text(heading),
        ]),
    ...(descriptionChildren && descriptionChildren.length
      ? [
          {
            type: VirtualDomElements.P,
            childCount: descriptionChildren.length,
          },
          ...descriptionChildren,
        ]
      : [
          {
            type: VirtualDomElements.P,
            childCount: 1,
          },
          text(description),
        ]),
>>>>>>> Stashed changes
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
