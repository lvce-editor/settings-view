import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import { getTabClassName } from '../GetTabClassName/GetTabClassName.ts'

export const getTabVirtualDom = (tab: Tab): readonly VirtualDomNode[] => {
  const className = getTabClassName(tab)
  return [
    {
      ariaSelected: tab.selected,
      childCount: 1,
      className,
      id: tab.id,
      name: tab.id,
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
    },
    text(tab.label),
  ]
}
