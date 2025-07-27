import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getSettingsTabsDom } from '../GetSettingsTabsDom/GetSettingsTabsDom.ts'

export const getSettingsSideBarDom = (tabs: readonly string[]): readonly VirtualDomNode[] => {
  const sideBarHeading = 'Settings SideBar'
  return [
    {
      type: VirtualDomElements.Aside,
      className: 'SettingsSideBar',
      childCount: 2,
    },
    {
      type: VirtualDomElements.H2,
      childCount: 1,
    },
    text(sideBarHeading),
    ...getSettingsTabsDom(tabs),
  ]
}
