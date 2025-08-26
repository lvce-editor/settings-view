import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'

export const handleClickTab = (state: SettingsState, name: string): SettingsState => {
  if (!name) {
    return state
  }

  const { items, tabs, searchValue, modifiedSettings, preferences, height, itemHeight, scrollOffset } = state
  const updatedTabs = getUpdatedTabs(tabs, name)
  const filteredItems = getFilteredItems(items, updatedTabs, searchValue, modifiedSettings, preferences)
  const { visibleItems, minLineY, maxLineY } = computeVisibleItems(filteredItems, height, scrollOffset, itemHeight)

  return {
    ...state,
    tabs: updatedTabs,
    filteredItems,
    visibleItems,
    minLineY,
    maxLineY,
  }
}
