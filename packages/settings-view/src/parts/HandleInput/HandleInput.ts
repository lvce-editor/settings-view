import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { addToHistory } from '../AddToHistory/AddToHistory.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleInput = (state: SettingsState, value: string, inputSource = User): SettingsState => {
  const { items, tabs, history, modifiedSettings, preferences, height, itemHeight, scrollOffset } = state
  const filteredItems = getFilteredItems(items, tabs, value, modifiedSettings, preferences)
  const { visibleItems, minLineY, maxLineY } = computeVisibleItems(filteredItems, height, scrollOffset, itemHeight)
  const { thumbHeight, thumbTop } = computeScrollBar(height, filteredItems.length, itemHeight, scrollOffset)

  const { newHistory, newHistoryIndex } = addToHistory(history, value)

  return {
    ...state,
    searchValue: value,
    filteredItems,
    visibleItems,
    minLineY,
    maxLineY,
    history: newHistory,
    historyIndex: newHistoryIndex,
    inputSource,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
  }
}
