import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsTabsDom } from '../GetSettingsTabsDom/GetSettingsTabsDom.ts'

export const getSettingsSideBarDom = (tabs: readonly Tab[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Aside,
      className: ClassNames.SettingsSideBar,
      childCount: 1,
    },
    ...getSettingsTabsDom(tabs),
  ]
}
