import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getResizerVirtualDom } from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'
import { getSettingsContentDom } from '../GetSettingsContentDom/GetSettingsContentDom.ts'
import { getSettingsSideBarDom } from '../GetSettingsSideBarDom/GetSettingsSideBarDom.ts'

const settingsMainNode: VirtualDomNode = {
  childCount: 3,
  className: ClassNames.SettingsMain,
  type: VirtualDomElements.Div,
}

export const getSettingsMainDom = (
  tabs: readonly Tab[],
  visibleItems: readonly DisplaySettingItem[],
  totalItemCount: number,
  searchValue: string,
  height: number,
  itemHeight: number,
): readonly VirtualDomNode[] => {
  const totalHeight = totalItemCount * itemHeight
  const showScrollBar = totalHeight > height

  return [
    settingsMainNode,
    ...getSettingsSideBarDom(tabs),
    ...getResizerVirtualDom(),
    ...getSettingsContentDom(visibleItems, tabs, searchValue, showScrollBar),
  ]
}
