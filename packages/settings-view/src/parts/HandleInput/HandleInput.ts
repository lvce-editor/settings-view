import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleInput = (state: SettingsState, value: string): SettingsState => {
  const { items, tabs } = state
  const filteredItems = getFilteredItems(items, tabs, value)
  return {
    ...state,
    searchValue: value,
    filteredItems,
    inputSource: User,
  }
}
