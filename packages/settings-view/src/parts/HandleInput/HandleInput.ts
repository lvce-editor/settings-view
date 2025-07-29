import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { User } from '../InputSource/InputSource.ts'
import { addToHistory } from '../AddToHistory/AddToHistory.ts'

export const handleInput = (state: SettingsState, value: string, inputSource = User): SettingsState => {
  const { items, tabs, preferences, history } = state
  const filteredItems = getFilteredItems(items, tabs, value, preferences)

  const { newHistory, newHistoryIndex } = addToHistory(history, value)

  return {
    ...state,
    searchValue: value,
    filteredItems,
    history: newHistory,
    historyIndex: newHistoryIndex,
    inputSource,
  }
}
