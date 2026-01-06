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

export const getItemSelectVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  const { description, errorMessage, hasError, heading, id, options } = item
  const domId = getInputId(id)
  const selectClassName = hasError ? `${ClassNames.Select} ${ClassNames.InputBoxError}` : ClassNames.Select
  const errorChildCount = hasError ? 1 : 0

  return [
    {
      childCount: 3 + errorChildCount,
      className: ClassNames.SettingsItem,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    ...getItemHeadingDom(heading),
    ...getItemLabelDom(domId, description),
    {
      childCount: options?.length || 0,
      className: selectClassName,
      id: domId,
      name: id,
      onChange: DomEventListenerFunctions.HandleSettingSelect,
      type: VirtualDomElements.Select,
    },
    ...(options?.flatMap(getOptionDom) || []),
    ...getErrorMessageDom(errorMessage),
  ]
}
