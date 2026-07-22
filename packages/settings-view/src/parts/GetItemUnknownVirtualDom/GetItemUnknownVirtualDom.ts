import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

const unknownItemNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.SettingsItem,
  role: AriaRoles.Group,
  type: VirtualDomElements.Div,
}

export const getItemUnknownVirtualDom = (): readonly VirtualDomNode[] => {
  return [unknownItemNode, text(SettingStrings.unknownSettingType())]
}
