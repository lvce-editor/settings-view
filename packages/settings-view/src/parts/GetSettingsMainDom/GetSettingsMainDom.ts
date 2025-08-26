import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsContentDom } from '../GetSettingsContentDom/GetSettingsContentDom.ts'
import { getSettingsSideBarDom } from '../GetSettingsSideBarDom/GetSettingsSideBarDom.ts'

export const getSettingsMainDom = (
  tabs: readonly Tab[],
  visibleItems: readonly DisplaySettingItem[],
  totalItemCount: number,
  searchValue: string,
  thumbHeight: number,
  thumbTop: number,
): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsMain,
      childCount: 2,
    },
    ...getSettingsSideBarDom(tabs),
    ...getSettingsContentDom(visibleItems, tabs, searchValue, thumbHeight, thumbTop),
  ]
}
