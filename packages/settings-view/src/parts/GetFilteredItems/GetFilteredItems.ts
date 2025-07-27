import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'

export const getFilteredItems = (items: readonly SettingItem[], tabs: readonly Tab[]): readonly SettingItem[] => {
  const selectedTab = tabs.find((tab) => tab.selected)
  if (!selectedTab) {
    return items
  }

  return items.filter((item) => item.category === selectedTab.id)
}