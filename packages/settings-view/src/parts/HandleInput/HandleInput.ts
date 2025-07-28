import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleInput = (state: SettingsState, value: string, inputSource = User): SettingsState => {
  const { items, tabs, preferences } = state
  const filteredItems = getFilteredItems(items, tabs, value, preferences)
  return {
    ...state,
    searchValue: value,
    filteredItems,
    inputSource,
  }
}
