import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getContentHeadingDom } from '../GetContentHeadingDom/GetContentHeadingDom.ts'
import { getScrollBarDom } from '../GetScrollBarDom/GetScrollBarDom.ts'
import { getSettingsItemsDom } from '../GetSettingsItemsDom/GetSettingsItemsDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsContentDom = (
  visibleItems: readonly DisplaySettingItem[],
  tabs: readonly Tab[],
  searchValue: string,
): readonly VirtualDomNode[] => {
  const selectedTab = tabs.find((tab) => tab.selected)
  const headerText = selectedTab ? selectedTab.label : SettingStrings.settingsContent()

  return [
    {
      childCount: 2,
      className: ClassNames.SettingsContent,
      onWheel: DomEventListenerFunctions.HandleWheel,
      type: VirtualDomElements.Div,
    },
    ...getContentHeadingDom(headerText),
    {
      childCount: 2,
      className: ClassNames.SettingsItemWrapper,
      type: VirtualDomElements.Div,
    },
    ...getSettingsItemsDom(visibleItems, searchValue),
    ...getScrollBarDom(),
  ]
}
