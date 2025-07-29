import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { Script } from '../InputSource/InputSource.ts'

export const useNextSearchValue = (state: SettingsState): SettingsState => {
  const { history, historyIndex, items, tabs, modifiedSettings } = state

  if (history.length === 0 || historyIndex >= history.length - 1) {
    return state
  }

  const newHistoryIndex = historyIndex + 1
  const newSearchValue = history[newHistoryIndex]
  const filteredItems = getFilteredItems(items, tabs, newSearchValue, modifiedSettings)

  return {
    ...state,
    searchValue: newSearchValue,
    historyIndex: newHistoryIndex,
    filteredItems,
    inputSource: Script,
  }
}
