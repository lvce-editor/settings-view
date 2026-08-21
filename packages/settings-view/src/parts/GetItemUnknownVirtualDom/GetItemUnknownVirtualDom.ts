import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemUnknownVirtualDom = (item: DisplaySettingItem): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: ClassNames.SettingsItem,
      name: item.id,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    text(SettingStrings.unknownSettingType()),
  ]
}
