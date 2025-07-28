import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

export const renderSettingValues = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { filteredItems, id } = newState
  const enabledTypes = [SettingItemType.Number, SettingItemType.String]
  const numericSettings = filteredItems.filter((item) => enabledTypes.includes(item.type))
  const inputValues = numericSettings.map((item) => ({
    name: item.id,
    value: item.value,
  }))
  return ['Viewlet.setInputValues', id, inputValues]
}
