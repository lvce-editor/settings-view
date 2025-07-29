import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { Script } from '../InputSource/InputSource.ts'

export const usePreviousSearchValue = (state: SettingsState): SettingsState => {
  const { history, historyIndex, items, tabs, preferences } = state

  if (history.length === 0 || historyIndex <= 0) {
    return state
  }

  const newHistoryIndex = historyIndex - 1
  const newSearchValue = history[newHistoryIndex]
  const filteredItems = getFilteredItems(items, tabs, newSearchValue, preferences)

  return {
    ...state,
    searchValue: newSearchValue,
    historyIndex: newHistoryIndex,
    filteredItems,
    inputSource: Script,
  }
}