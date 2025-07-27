import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { Script } from '../InputSource/InputSource.ts'

export const clear = (state: SettingsState): SettingsState => {
  const { items, tabs, preferences } = state
  const newSearchValue = ''
  const filteredItems = getFilteredItems(items, tabs, newSearchValue, preferences)
  return {
    ...state,
    searchValue: newSearchValue,
    inputSource: Script,
    filteredItems,
  }
}
