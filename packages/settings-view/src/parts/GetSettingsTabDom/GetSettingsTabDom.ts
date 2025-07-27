import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import { getTabClassName } from '../GetTabClassName/GetTabClassName.ts'

export const getTabVirtualDom = (tab: Tab): readonly VirtualDomNode[] => {
  const className = getTabClassName(tab)
  return [
    {
      type: VirtualDomElements.Button,
      className,
      childCount: 1,
      role: AriaRoles.Tab,
      name: tab.id,
      id: tab.id,
      ariaSelected: tab.selected,
    },
    text(tab.label),
  ]
}
