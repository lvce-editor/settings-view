import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsContentDom } from '../GetSettingsContentDom/GetSettingsContentDom.ts'
import { getSettingsSideBarDom } from '../GetSettingsSideBarDom/GetSettingsSideBarDom.ts'

export const getSettingsMainDom = (tabs: readonly Tab[], items: readonly SettingItem[], searchValue: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsMain,
      childCount: 2,
    },
    ...getSettingsSideBarDom(tabs),
    ...getSettingsContentDom(items, tabs, searchValue),
  ]
}
