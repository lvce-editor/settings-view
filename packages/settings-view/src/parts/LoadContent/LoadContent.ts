import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { ModifiedSettings, SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getPreferences } from '../GetPreferences/GetPreferences.ts'
import { getSettingItems } from '../GetSettingItems/GetSettingItems.ts'
import { getTabs } from '../GetTabs/GetTabs.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'
import { Script } from '../InputSource/InputSource.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

const getModifiedSettings = (preferences: any): ModifiedSettings => {
  const modifiedSettings = Object.create(null)
  for (const key of Object.keys(preferences)) {
    modifiedSettings[key] = true
  }
  return modifiedSettings
}

export const loadContent = async (state: SettingsState, savedState: unknown): Promise<SettingsState> => {
  const { searchValue, tabId } = restoreState(savedState)
  const tabs = getTabs()
  const newTabs = getUpdatedTabs(tabs, tabId)
  const items: readonly SettingItem[] = await getSettingItems()
  const preferences = await getPreferences()
  const modifiedSettings: ModifiedSettings = getModifiedSettings(preferences)
  const filteredItems = getFilteredItems(items, newTabs, searchValue, preferences)
  return {
    ...state,
    filteredItems,
    inputSource: Script,
    items,
    modifiedSettings,
    preferences,
    searchValue,
    tabs: newTabs,
  }
}
