import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'

export const handleClickTab = (state: SettingsState, name: string): SettingsState => {
  if (!name) {
    return state
  }

  const { items, tabs, searchValue, preferences } = state
  const updatedTabs = getUpdatedTabs(tabs, name)
  const filteredItems = getFilteredItems(items, updatedTabs, searchValue, preferences)

  return {
    ...state,
    tabs: updatedTabs,
    filteredItems,
  }
}
