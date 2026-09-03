import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getTabVirtualDom } from '../GetSettingsTabDom/GetSettingsTabDom.ts'

export const getSettingsTabsDom = (tabs: readonly Tab[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: tabs.length,
      className: ClassNames.SettingsTabs,
      role: AriaRoles.TabList,
      type: VirtualDomElements.Ul,
    },
    ...tabs.flatMap(getTabVirtualDom),
  ]
}
