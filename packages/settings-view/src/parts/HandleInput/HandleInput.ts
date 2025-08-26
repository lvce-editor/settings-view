import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { addToHistory } from '../AddToHistory/AddToHistory.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleInput = (state: SettingsState, value: string, inputSource = User): SettingsState => {
  const { items, tabs, history, modifiedSettings, preferences } = state
  const filteredItems = getFilteredItems(items, tabs, value, modifiedSettings, preferences)

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
