import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getNewFilteredItems } from '../GetNewFilteredItems/GetNewFilteredItems.ts'
import { Script } from '../InputSource/InputSource.ts'

export const resetSetting = (state: SettingsState, settingId: string): SettingsState => {
  const { filteredItems, items, modifiedSettings, preferences, searchValue, tabs } = state
  if (!(settingId in modifiedSettings)) {
    return state
  }
  const newModifiedSettings = Object.fromEntries(Object.entries(modifiedSettings).filter(([key]) => key !== settingId))
  const newPreferences = Object.fromEntries(Object.entries(preferences).filter(([key]) => key !== settingId))
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
    inputSource: Script,
    modifiedSettings: newModifiedSettings,
    preferences: newPreferences,
  }
}
