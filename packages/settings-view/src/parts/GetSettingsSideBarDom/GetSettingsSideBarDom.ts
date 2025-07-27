import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

const getTabVirtualDom = (tab: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'Tab',
      childCount: 1,
    },
    text(tab),
  ]
}

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
      className: 'SettingsSideBarHeading',
      childCount: 1,
    },
    text(sideBarHeading),
    {
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: tabs.length,
    },
    ...tabs.flatMap(getTabVirtualDom),
  ]
}
