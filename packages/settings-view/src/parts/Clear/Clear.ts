import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { Script } from '../InputSource/InputSource.ts'

export const clear = (state: SettingsState): SettingsState => {
  const { items, tabs } = state
  const newSearchValue = ''
  const filteredItems = getFilteredItems(items, tabs, newSearchValue)
  return {
    ...state,
    searchValue: newSearchValue,
    inputSource: Script,
    filteredItems,
  }
}
