import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'

export const handleClickTab = (state: SettingsState, name: string = ''): SettingsState => {
  const { height, itemHeight, items, modifiedSettings, preferences, scrollOffset, searchValue, tabs } = state
  const viewportHeight = getSettingsViewportHeight(height)
  const updatedTabs = getUpdatedTabs(tabs, name)
  const filteredItems = getFilteredItems(items, updatedTabs, searchValue, modifiedSettings, preferences)
  const maxScrollable = Math.max(0, filteredItems.length * itemHeight - viewportHeight)
  const nextScrollOffset = Math.min(Math.max(0, scrollOffset), maxScrollable)
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, viewportHeight, nextScrollOffset, itemHeight)
  const { scrollBarMinHeight } = state
  const { thumbHeight, thumbTop } = computeScrollBar(viewportHeight, filteredItems.length, itemHeight, nextScrollOffset, scrollBarMinHeight)

  return {
    ...state,
    filteredItems,
    maxLineY,
    minLineY,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
    scrollOffset: nextScrollOffset,
    tabs: updatedTabs,
    visibleItems,
  }
}
