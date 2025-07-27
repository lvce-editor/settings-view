import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getPreferences } from '../GetPreferences/GetPreferences.ts'
import { getSettingItems } from '../GetSettingItems/GetSettingItems.ts'
import { getTabs } from '../GetTabs/GetTabs.ts'
import { Script } from '../InputSource/InputSource.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'

export const loadContent = async (state: SettingsState, savedState: unknown): Promise<SettingsState> => {
  const { searchValue, tabId } = restoreState(savedState)
  const tabs = getTabs()
  const newTabs = getUpdatedTabs(tabs, tabId)
  const items: readonly SettingItem[] = await getSettingItems()
  const filteredItems = getFilteredItems(items, newTabs, searchValue)
  const preferences = await getPreferences()
  return {
    ...state,
    tabs: newTabs,
    items,
    filteredItems,
    preferences,
    inputSource: Script,
    searchValue,
  }
}
