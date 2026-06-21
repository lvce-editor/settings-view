import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeDerivedSectionState } from '../ComputeDerivedSectionState/ComputeDerivedSectionState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getSectionHeightMetrics } from '../GetSectionHeightMetrics/GetSectionHeightMetrics.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'

export const handleClickTab = (state: SettingsState, name: string): SettingsState => {
  if (!name) {
    return state
  }

  const { height, items, modifiedSettings, preferences, scrollBarMinHeight, scrollOffset, searchValue, tabs } = state
  const updatedTabs = getUpdatedTabs(tabs, name)
  const filteredItems = getFilteredItems(items, updatedTabs, searchValue, modifiedSettings, preferences)
  const sectionHeightMetrics = getSectionHeightMetrics(state)
  const derived = computeDerivedSectionState(filteredItems, height, scrollOffset, scrollBarMinHeight, sectionHeightMetrics)

  return {
    ...state,
    ...derived,
    filteredItems,
    tabs: updatedTabs,
  }
}
