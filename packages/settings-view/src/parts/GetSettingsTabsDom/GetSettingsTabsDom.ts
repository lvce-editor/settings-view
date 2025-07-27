import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import { getTabVirtualDom } from '../GetSettingsTabDom/GetSettingsTabDom.ts'

export const getSettingsTabsDom = (tabs: readonly Tab[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: tabs.length,
    },
    ...tabs.flatMap(getTabVirtualDom),
  ]
}
