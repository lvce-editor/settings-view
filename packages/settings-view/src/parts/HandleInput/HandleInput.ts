import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { addToHistory } from '../AddToHistory/AddToHistory.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { User } from '../InputSource/InputSource.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'

export const handleInput = (state: SettingsState, value: string, inputSource = User): SettingsState => {
  const { items, tabs, history, modifiedSettings, preferences, height, itemHeight, scrollOffset } = state
  const filteredItems = getFilteredItems(items, tabs, value, modifiedSettings, preferences)
  const { visibleItems, minLineY, maxLineY } = computeVisibleItems(filteredItems, height, scrollOffset, itemHeight)

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
  }
}
