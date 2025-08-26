import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { addToHistory } from '../AddToHistory/AddToHistory.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleInput = (state: SettingsState, value: string, inputSource = User): SettingsState => {
  const { items, tabs, history, modifiedSettings, preferences, height, itemHeight } = state
  const filteredItems = getFilteredItems(items, tabs, value, modifiedSettings, preferences)
  // Reset scroll when filter value changes so the user sees results from the top
  const nextScrollOffset = 0
  const { visibleItems, minLineY, maxLineY } = computeVisibleItems(filteredItems, height, nextScrollOffset, itemHeight)
  const { scrollBarMinHeight } = state
  const { thumbHeight, thumbTop } = computeScrollBar(height, filteredItems.length, itemHeight, nextScrollOffset, scrollBarMinHeight)

  const { newHistory, newHistoryIndex } = addToHistory(history, value)

  return {
    ...state,
    searchValue: value,
    filteredItems,
    visibleItems,
    minLineY,
    maxLineY,
    deltaY: 0,
    scrollOffset: nextScrollOffset,
    history: newHistory,
    historyIndex: newHistoryIndex,
    inputSource,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
  }
}
