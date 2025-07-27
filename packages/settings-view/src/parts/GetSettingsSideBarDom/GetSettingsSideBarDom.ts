import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

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
  return [
    {
      type: VirtualDomElements.Aside,
      className: 'SettingsSideBar',
      childCount: tabs.length,
    },
    ...tabs.flatMap(getTabVirtualDom),
  ]
}
