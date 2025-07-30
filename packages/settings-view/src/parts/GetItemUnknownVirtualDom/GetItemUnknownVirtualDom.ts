import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemUnknownVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: AriaRoles.Group,
    },
    text(SettingStrings.unknownSettingType()),
  ]
}
