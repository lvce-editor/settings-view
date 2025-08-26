import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getHighlightedTextDom } from '../GetHighlightedTextDom/GetHighlightedTextDom.ts'

<<<<<<< Updated upstream
export const getItemCheckBoxVirtualDom = (item: DisplaySettingItem, highlightsEnabled?: boolean, searchValue?: string): readonly VirtualDomNode[] => {
  const { heading, description, id, modified, hasError, errorMessage } = item
=======
export const getItemCheckBoxVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id, modified, hasError, errorMessage, headingChildren, descriptionChildren } = item
>>>>>>> Stashed changes
  const domId = getInputId(id)
  const checkBoxClassName = hasError ? `${ClassNames.CheckBox} ${ClassNames.InputBoxError}` : ClassNames.CheckBox
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2 + errorChildCount,
      role: AriaRoles.Group,
      'data-modified': modified,
    },
<<<<<<< Updated upstream
    ...getItemHeadingDom(heading, highlightsEnabled, searchValue),
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
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      childCount: (highlightsEnabled && searchValue ? getHighlightedTextDom(description, searchValue).length : 1),
      htmlFor: domId,
    },
    ...(highlightsEnabled && searchValue ? getHighlightedTextDom(description, searchValue) : [text(description)]),
=======
      childCount: descriptionChildren && descriptionChildren.length ? descriptionChildren.length : 1,
      htmlFor: domId,
    },
    ...(descriptionChildren && descriptionChildren.length ? descriptionChildren : [text(description)]),
>>>>>>> Stashed changes
    ...getErrorMessageDom(errorMessage),
  ]
}
