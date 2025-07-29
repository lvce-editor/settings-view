import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getInputId } from '../GetInputId/GetInputId.ts'
import { getItemHeadingDom } from '../GetItemHeadingDom/GetItemHeadingDom.ts'
import { getItemLabelDom } from '../GetItemLabelDom/GetItemLabelDom.ts'
import { getOptionDom } from '../GetOptionDom/GetOptionDom.ts'

export const getItemSelectVirtualDom = (item: SettingItem): readonly VirtualDomNode[] => {
  const { heading, description, id } = item
  const options = item.options || []
  const domId = getInputId(id)
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 3,
      role: 'group',
    },
    ...getItemHeadingDom(heading),
    ...getItemLabelDom(domId, description),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: options.length,
      id: domId,
      name: id,
      onChange: DomEventListenerFunctions.HandleSettingSelect,
    },
    ...options.flatMap(getOptionDom),
  ]
}
