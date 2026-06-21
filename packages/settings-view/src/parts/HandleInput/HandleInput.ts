import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { addToHistory } from '../AddToHistory/AddToHistory.ts'
import { computeDerivedSectionState } from '../ComputeDerivedSectionState/ComputeDerivedSectionState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getSectionHeightMetrics } from '../GetSectionHeightMetrics/GetSectionHeightMetrics.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleInput = (state: SettingsState, value: string, inputSource = User): SettingsState => {
  const { height, history, items, modifiedSettings, preferences, scrollBarMinHeight, tabs } = state
  const filteredItems = getFilteredItems(items, tabs, value, modifiedSettings, preferences)
  // Reset scroll when filter value changes so the user sees results from the top
  const nextScrollOffset = 0
  const sectionHeightMetrics = getSectionHeightMetrics(state)
  const derived = computeDerivedSectionState(filteredItems, height, nextScrollOffset, scrollBarMinHeight, sectionHeightMetrics)

  const { newHistory, newHistoryIndex } = addToHistory(history, value)

  return {
    ...state,
    ...derived,
    deltaY: 0,
    filteredItems,
    history: newHistory,
    historyIndex: newHistoryIndex,
    inputSource,
    scrollOffset: nextScrollOffset,
    searchValue: value,
  }
}
