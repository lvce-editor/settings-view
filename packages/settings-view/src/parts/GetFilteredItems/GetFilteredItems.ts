import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'

const isItemModified = (item: Readonly<SettingItem>, preferences: ModifiedSettings): boolean => {
  return item.id in preferences
}

export const addModifiedProperty = (items: readonly SettingItem[], preferences: ModifiedSettings): readonly SettingItem[] => {
  return items.map((item) => ({
    ...item,
    modified: isItemModified(item, preferences),
  }))
}

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
): readonly SettingItem[] => {
  const tabFilteredItems = filterByTab(items, tabs)
  const itemsWithModifiedProperty = addModifiedProperty(tabFilteredItems, preferences)
  return filterBySearch(itemsWithModifiedProperty, searchValue)
}
