import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getScrollBarDom } from '../GetScrollBarDom/GetScrollBarDom.ts'
import { getSettingsItemsDom } from '../GetSettingsItemsDom/GetSettingsItemsDom.ts'
import { getSpacerDom } from '../GetSpacerDom/GetSpacerDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsContentDom = (
  visibleItems: readonly DisplaySettingItem[],
  tabs: readonly Tab[],
  searchValue: string,
  height: number,
  scrollOffset: number,
  itemHeight: number,
  minLineY: number,
  totalItemCount: number,
): readonly VirtualDomNode[] => {
  const selectedTab = tabs.find((tab) => tab.selected)
  const headerText = selectedTab ? selectedTab.label : SettingStrings.settingsContent()

  const totalHeight = totalItemCount * itemHeight
  const topSpacer = minLineY * itemHeight
  const bottomSpacer = Math.max(0, totalHeight - topSpacer - visibleItems.length * itemHeight)

  const scrollable = Math.max(0, totalHeight - height)
  const thumbTrack = Math.max(0, height)
  const thumbHeight = totalHeight > 0 ? Math.max(20, Math.floor((height / Math.max(totalHeight, 1)) * height)) : height
  const thumbMaxTop = Math.max(0, thumbTrack - thumbHeight)
  const thumbTop = scrollable > 0 ? Math.min(thumbMaxTop, Math.floor((scrollOffset / scrollable) * thumbMaxTop)) : 0

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsContent,
      childCount: 3,
      // onScroll: DomEventListenerFunctions.HandleScroll,
      onWheel: DomEventListenerFunctions.HandleWheel,
    },
    {
      type: VirtualDomElements.H1,
      className: ClassNames.SettingsContentHeading,
      childCount: 1,
    },
    text(headerText),
    ...getSettingsItemsDom(visibleItems, searchValue),
    ...getScrollBarDom(thumbHeight, thumbTop),
  ]
}
