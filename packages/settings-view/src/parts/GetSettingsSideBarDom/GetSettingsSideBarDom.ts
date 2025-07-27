import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import { getSettingsTabsDom } from '../GetSettingsTabsDom/GetSettingsTabsDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsSideBarDom = (tabs: readonly Tab[]): readonly VirtualDomNode[] => {
  const sideBarHeading = SettingStrings.settingsSideBar()
  return [
    {
      type: VirtualDomElements.Aside,
      className: 'SettingsSideBar',
      childCount: 2,
    },
    {
      type: VirtualDomElements.H2,
      className: 'SettingsSideBarHeading',
      childCount: 1,
    },
    text(sideBarHeading),
    ...getSettingsTabsDom(tabs),
  ]
}
