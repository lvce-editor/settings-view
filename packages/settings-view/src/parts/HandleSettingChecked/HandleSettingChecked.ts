import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'

export const handleSettingChecked = (state: SettingsState, name: string, value: string): SettingsState => {
  const { modifiedSettings, items, tabs, searchValue } = state
  const newModifiedSettings = {
    ...modifiedSettings,
    [name]: true,
  }
  const filteredItems = getFilteredItems(items, tabs, searchValue, newModifiedSettings)

  // TODO update value
  return {
    ...state,
    modifiedSettings: newModifiedSettings,
    filteredItems,
  }
}
