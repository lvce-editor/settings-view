import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'

export const getNewFilteredItems = (
  oldModifiedSetings: ModifiedSettings,
  newModifiedSettings: ModifiedSettings,
  items: readonly SettingItem[],
  tabs: readonly Tab[],
  searchValue: string,
  oldFilteredItems: readonly DisplaySettingItem[],
  oldPreferences: Readonly<Record<string, any>>,
  newPreferences: Readonly<Record<string, any>>,
): readonly DisplaySettingItem[] => {
  if (oldModifiedSetings === newModifiedSettings && oldPreferences === newPreferences) {
    return oldFilteredItems
  }
  return getFilteredItems(items, tabs, searchValue, newModifiedSettings)
}
