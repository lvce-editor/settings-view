import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getItemUnknownVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: ClassNames.SettingsItem,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    text(SettingStrings.unknownSettingType()),
  ]
}
