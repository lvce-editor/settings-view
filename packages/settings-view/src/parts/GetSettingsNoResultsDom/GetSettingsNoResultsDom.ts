import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

const settingsItemsNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.SettingsItems,
  onContextMenu: DomEventListenerFunctions.HandleContextMenu,
  type: VirtualDomElements.Div,
}

const noResultsNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.SettingsNoResults,
  type: VirtualDomElements.P,
}

export const getSettingsNoResultsDom = (searchValue: string): readonly VirtualDomNode[] => {
  return [settingsItemsNode, noResultsNode, text(SettingStrings.noSettingsMatching(searchValue))]
}
