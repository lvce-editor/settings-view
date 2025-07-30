import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import { validateSettings } from '../ValidateSettings/ValidateSettings.ts'

export const filterByTab = (items: readonly SettingItem[], tabs: readonly Tab[]): readonly SettingItem[] => {
  const selectedTab = tabs.find((tab) => tab.selected)
  if (!selectedTab) {
    return items
  }

  return items.filter((item) => item.category === selectedTab.id)
}

export const filterBySearch = (items: readonly SettingItem[], searchValue: string | null): readonly SettingItem[] => {
  if (!searchValue || !searchValue.trim()) {
    return items
  }

  const normalizedSearchValue = searchValue.toLowerCase().trim()
  return items.filter((item: Readonly<SettingItem>) => item.heading.toLowerCase().includes(normalizedSearchValue))
}

export const getFilteredItems = (
  items: readonly SettingItem[],
  tabs: readonly Tab[],
  searchValue: string = '',
  preferences: ModifiedSettings,
): readonly DisplaySettingItem[] => {
  const tabFilteredItems = filterByTab(items, tabs)
  const searchFilteredItems = filterBySearch(tabFilteredItems, searchValue)
  return validateSettings(searchFilteredItems, preferences)
}
