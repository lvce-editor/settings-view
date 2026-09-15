import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { addToHistory } from '../AddToHistory/AddToHistory.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleInput = (state: SettingsState, value: string, inputSource = User): SettingsState => {
  const { height, history, itemHeight, items, modifiedSettings, preferences, tabs } = state
  const viewportHeight = getSettingsViewportHeight(height)
  const filteredItems = getFilteredItems(items, tabs, value, modifiedSettings, preferences)
  // Reset scroll when filter value changes so the user sees results from the top
  const nextScrollOffset = 0
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, viewportHeight, nextScrollOffset, itemHeight)
  const { scrollBarMinHeight } = state
  const { thumbHeight, thumbTop } = computeScrollBar(viewportHeight, filteredItems.length, itemHeight, nextScrollOffset, scrollBarMinHeight)

  const { newHistory, newHistoryIndex } = addToHistory(history, value)

  return {
    ...state,
    deltaY: 0,
    filteredItems,
    history: newHistory,
    historyIndex: newHistoryIndex,
    inputSource,
    maxLineY,
    minLineY,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
    scrollOffset: nextScrollOffset,
    searchValue: value,
    visibleItems,
  }
}
