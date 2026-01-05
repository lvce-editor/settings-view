import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'

export const handleClickTab = (state: SettingsState, name: string): SettingsState => {
  if (!name) {
    return state
  }

  const { height, itemHeight, items, modifiedSettings, preferences, scrollOffset, searchValue, tabs } = state
  const updatedTabs = getUpdatedTabs(tabs, name)
  const filteredItems = getFilteredItems(items, updatedTabs, searchValue, modifiedSettings, preferences)
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, height, scrollOffset, itemHeight)
  const { scrollBarMinHeight } = state
  const { thumbHeight, thumbTop } = computeScrollBar(height, filteredItems.length, itemHeight, scrollOffset, scrollBarMinHeight)

  return {
    ...state,
    filteredItems,
    maxLineY,
    minLineY,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
    tabs: updatedTabs,
    visibleItems,
  }
}
