import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'

export const handleClickTab = (state: SettingsState, name: string): SettingsState => {
  if (!name) {
    return state
  }

  const updatedTabs = getUpdatedTabs(state.tabs, name)
  const filteredItems = getFilteredItems(state.items, updatedTabs)

  return {
    ...state,
    tabs: updatedTabs,
    filteredItems,
  }
}
