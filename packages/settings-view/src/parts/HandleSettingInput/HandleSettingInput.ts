import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleSettingInput = (state: SettingsState, name: string, value: string, inputSource = User): SettingsState => {
  // TODO update value
  const { modifiedSettings, items, tabs, searchValue } = state
  const newModifiedSettings = {
    ...modifiedSettings,
    [name]: true,
  }

  // TODO don't need to update items if it was already modified
  const filteredItems = getFilteredItems(items, tabs, searchValue, newModifiedSettings)

  return {
    ...state,
    inputSource,
    filteredItems,
  }
}
