import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getNewFilteredItems } from '../GetNewFilteredItems/GetNewFilteredItems.ts'
import { getNewModifiedSettings } from '../GetNewModifiedSettings/GetNewModifiedSettings.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleSettingInput = (state: SettingsState, name: string, value: string, inputSource = User): SettingsState => {
  const { modifiedSettings, items, tabs, searchValue, preferences, filteredItems } = state
  const newModifiedSettings = getNewModifiedSettings(modifiedSettings, name)
  const newPreferences = {
    ...preferences,
    [name]: value,
  }
  const newFilteredItems = getNewFilteredItems(modifiedSettings, newModifiedSettings, items, tabs, searchValue, filteredItems)
  return {
    ...state,
    inputSource,
    filteredItems: newFilteredItems,
    preferences: newPreferences,
  }
}
