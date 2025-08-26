import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getSettingsItemsDom } from '../GetSettingsItemsDom/GetSettingsItemsDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsContentDom = (
  items: readonly DisplaySettingItem[],
  tabs: readonly Tab[],
  searchValue: string,
  height: number,
  scrollOffset: number,
  itemHeight: number,
): readonly VirtualDomNode[] => {
  const selectedTab = tabs.find((tab) => tab.selected)
  const headerText = selectedTab ? selectedTab.label : SettingStrings.settingsContent()

  const totalHeight = items.length * itemHeight
  const minLineY = Math.max(0, Math.floor(scrollOffset / itemHeight))
  const itemsPerViewport = Math.max(1, Math.ceil(height / itemHeight))
  const maxLineY = Math.min(items.length, minLineY + itemsPerViewport)
  const visibleItems = items.slice(minLineY, maxLineY)
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
      childCount: 5,
      onScroll: DomEventListenerFunctions.HandleScroll,
    },
    {
      type: VirtualDomElements.H1,
      className: ClassNames.SettingsContentHeading,
      childCount: 1,
    },
    text(headerText),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemsSpacer,
      childCount: 0,
      style: `height:${topSpacer}px;`,
    },
    ...getSettingsItemsDom(visibleItems, searchValue),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemsSpacer,
      childCount: 0,
      style: `height:${bottomSpacer}px;`,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsScrollBar,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsScrollBarThumb,
      childCount: 0,
      style: `height:${thumbHeight}px;top:${thumbTop}px;`,
    },
  ]
}
