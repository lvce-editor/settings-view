import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { addToHistory } from '../AddToHistory/AddToHistory.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleInput = (state: SettingsState, value: string, inputSource = User): SettingsState => {
  const { height, history, itemHeight, items, modifiedSettings, preferences, tabs } = state
  const filteredItems = getFilteredItems(items, tabs, value, modifiedSettings, preferences)
  // Reset scroll when filter value changes so the user sees results from the top
  const nextScrollOffset = 0
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, height, nextScrollOffset, itemHeight)
  const { scrollBarMinHeight } = state
  const { thumbHeight, thumbTop } = computeScrollBar(height, filteredItems.length, itemHeight, nextScrollOffset, scrollBarMinHeight)

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
