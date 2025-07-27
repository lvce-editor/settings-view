import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getPreferences } from '../GetPreferences/GetPreferences.ts'
import { getSettingItems } from '../GetSettingItems/GetSettingItems.ts'
import { getTabs } from '../GetTabs/GetTabs.ts'
import { Script } from '../InputSource/InputSource.ts'

export const loadContent = async (state: SettingsState, savedState: unknown): Promise<SettingsState> => {
  const { searchValue } = state
  const tabs = getTabs()
  const items: readonly SettingItem[] = await getSettingItems()
  const filteredItems = getFilteredItems(items, tabs, searchValue)
  const preferences = await getPreferences()
  return {
    ...state,
    tabs,
    items,
    filteredItems,
    preferences,
    inputSource: Script,
  }
}
