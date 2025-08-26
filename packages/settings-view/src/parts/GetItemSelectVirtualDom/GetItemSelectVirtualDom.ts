import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getErrorMessageDom } from '../GetErrorMessageDom/GetErrorMessageDom.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getItemLabelDom } from '../GetItemLabelDom/GetItemLabelDom.ts'
import { getOptionDom } from '../GetOptionDom/GetOptionDom.ts'

export const getItemSelectVirtualDom = (item: DisplaySettingItem, highlightsEnabled?: boolean, searchValue?: string): readonly VirtualDomNode[] => {
  const { heading, description, id, options, hasError, errorMessage } = item
  const domId = getInputId(id)
  const selectClassName = hasError ? `${ClassNames.Select} ${ClassNames.InputBoxError}` : ClassNames.Select
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 3 + errorChildCount,
      role: AriaRoles.Group,
    },
    ...getItemHeadingDom(heading, highlightsEnabled, searchValue),
    ...getItemLabelDom(domId, description, highlightsEnabled, searchValue),
    {
      type: VirtualDomElements.Select,
      className: selectClassName,
      childCount: options?.length || 0,
      id: domId,
      name: id,
      onChange: DomEventListenerFunctions.HandleSettingSelect,
    },
    ...(options?.flatMap(getOptionDom) || []),
    ...getErrorMessageDom(errorMessage),
  ]
}
