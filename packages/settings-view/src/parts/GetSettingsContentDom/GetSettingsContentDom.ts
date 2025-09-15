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
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsContent,
      childCount: 2,
      onWheel: DomEventListenerFunctions.HandleWheel,
    },
    ...getContentHeadingDom(headerText),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemWrapper,
      childCount: 2,
    },
    ...getSettingsItemsDom(visibleItems, searchValue),
    ...getScrollBarDom(),
  ]
}
