import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getNewFilteredItems } from '../GetNewFilteredItems/GetNewFilteredItems.ts'
import { getNewModifiedSettings } from '../GetNewModifiedSettings/GetNewModifiedSettings.ts'

export const handleSettingUpdate = (state: SettingsState, name: string, value: any, inputSource: number): SettingsState => {
  const { filteredItems, items, modifiedSettings, preferences, searchValue, tabs } = state
  const newModifiedSettings = getNewModifiedSettings(modifiedSettings, name)
  const newPreferences = {
    ...preferences,
    [name]: value,
  }
  const newFilteredItems = getNewFilteredItems(
    modifiedSettings,
    newModifiedSettings,
    items,
    tabs,
    searchValue,
    filteredItems,
    preferences,
    newPreferences,
  )
  return {
    ...state,
    filteredItems: newFilteredItems,
    inputSource,
    preferences: newPreferences,
  }
}
