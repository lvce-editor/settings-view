import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { Preferences } from '../Preferences/Preferences.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import { filterBySearch } from '../FilterBySearch/FilterBySearch.ts'
import { filterByTab } from '../FilterByTab/FilterByTab.ts'
import { parseFilterQuery } from '../ParseFilterQuery/ParseFilterQuery.ts'
import { validateSettings } from '../ValidateSettings/ValidateSettings.ts'

export const getFilteredItems = (
  items: readonly SettingItem[],
  tabs: readonly Tab[],
  searchValue: string,
  modifiedSettings: ModifiedSettings,
  preferences: Preferences,
): readonly DisplaySettingItem[] => {
  const parsedQuery = parseFilterQuery(searchValue)
  const tabFilteredItems = filterByTab(items, tabs)
  const searchFilteredItems = filterBySearch(tabFilteredItems, parsedQuery.query)
  const validated = validateSettings(searchFilteredItems, modifiedSettings, preferences)
  return parsedQuery.modified ? validated.filter((item) => item.modified) : validated
}
