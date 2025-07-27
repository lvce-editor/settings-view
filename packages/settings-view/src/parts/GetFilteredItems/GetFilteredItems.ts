import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'

export const getFilteredItems = (items: readonly SettingItem[], tabs: readonly Tab[], searchValue: string = ''): readonly SettingItem[] => {
  const selectedTab = tabs.find((tab) => tab.selected)
  if (!selectedTab) {
    return items
  }

  const tabFilteredItems = items.filter((item) => item.category === selectedTab.id)

  if (!searchValue.trim()) {
    return tabFilteredItems
  }

  const normalizedSearchValue = searchValue.toLowerCase().trim()
  return tabFilteredItems.filter((item) => item.heading.toLowerCase().includes(normalizedSearchValue))
}
