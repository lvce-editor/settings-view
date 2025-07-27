import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import { getSettingsItemsDom } from '../GetSettingsItemsDom/GetSettingsItemsDom.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsContentDom = (items: readonly SettingItem[], tabs: readonly Tab[], searchValue: string): readonly VirtualDomNode[] => {
  const selectedTab = tabs.find((tab) => tab.selected)
  const headerText = selectedTab ? selectedTab.label : SettingStrings.settingsContent()

  return [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsContent',
      childCount: 2,
    },
    {
      type: VirtualDomElements.H1,
      className: 'SettingsContentHeading',
      childCount: 1,
    },
    text(headerText),
    ...getSettingsItemsDom(items, searchValue),
  ]
}
