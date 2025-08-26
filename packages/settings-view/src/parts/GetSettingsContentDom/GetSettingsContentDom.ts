import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getSettingsItemsDom } from '../GetSettingsItemsDom/GetSettingsItemsDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsContentDom = (items: readonly DisplaySettingItem[], tabs: readonly Tab[], searchValue: string, highlightsEnabled = false): readonly VirtualDomNode[] => {
  const selectedTab = tabs.find((tab) => tab.selected)
  const headerText = selectedTab ? selectedTab.label : SettingStrings.settingsContent()

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsContent,
      childCount: 2,
      onScroll: DomEventListenerFunctions.HandleScroll,
    },
    {
      type: VirtualDomElements.H1,
      className: ClassNames.SettingsContentHeading,
      childCount: 1,
    },
    text(headerText),
    ...getSettingsItemsDom(items, searchValue, highlightsEnabled),
  ]
}
