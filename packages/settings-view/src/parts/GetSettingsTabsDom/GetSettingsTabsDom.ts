import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getTabVirtualDom } from '../GetSettingsTabDom/GetSettingsTabDom.ts'

export const getSettingsTabsDom = (tabs: readonly string[]): readonly VirtualDomNode[] => {
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
