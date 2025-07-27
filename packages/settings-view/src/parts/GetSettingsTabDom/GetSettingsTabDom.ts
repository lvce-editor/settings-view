import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'

export const getTabVirtualDom = (tab: Tab): readonly VirtualDomNode[] => {
  const className = tab.selected ? mergeClassNames('Tab', 'TabSelected') : 'Tab'
  return [
    {
      type: VirtualDomElements.Li,
      className,
      childCount: 1,
      role: AriaRoles.Tab,
      name: tab.id,
    },
    text(tab.label),
  ]
}
