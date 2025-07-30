import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import { filterBySearch } from '../FilterBySearch/FilterBySearch.ts'
import { filterByTab } from '../FilterByTab/FilterByTab.ts'
import { validateSettings } from '../ValidateSettings/ValidateSettings.ts'

export const getFilteredItems = (
  items: readonly SettingItem[],
  tabs: readonly Tab[],
  searchValue: string = '',
  modifiedSettings: ModifiedSettings,
): readonly DisplaySettingItem[] => {
  const tabFilteredItems = filterByTab(items, tabs)
  const searchFilteredItems = filterBySearch(tabFilteredItems, searchValue)
  const validated = validateSettings(searchFilteredItems, modifiedSettings)
  return validated
}
