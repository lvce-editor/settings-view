import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

const enabledTypes: readonly number[] = [SettingItemType.Number, SettingItemType.String, SettingItemType.Color]

export const renderSettingValues = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { filteredItems, id } = newState
  const numericSettings = filteredItems.filter((item) => enabledTypes.includes(item.type))
  const inputValues = numericSettings.map((item) => ({
    name: item.id,
    value: item.value,
  }))
  return ['Viewlet.setInputValues', id, inputValues]
}
