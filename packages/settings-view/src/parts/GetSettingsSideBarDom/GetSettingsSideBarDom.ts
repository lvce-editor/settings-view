import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsTabsDom } from '../GetSettingsTabsDom/GetSettingsTabsDom.ts'

export const getSettingsSideBarDom = (tabs: readonly Tab[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: ClassNames.SettingsSideBar,
      type: VirtualDomElements.Aside,
    },
    ...getSettingsTabsDom(tabs),
  ]
}
