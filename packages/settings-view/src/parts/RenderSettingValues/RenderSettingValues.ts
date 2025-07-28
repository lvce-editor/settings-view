import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

export const renderSettingValues = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { filteredItems } = newState
  const numericSettings = filteredItems.filter((item) => item.type === SettingItemType.Number)

  const inputValues = numericSettings.map((item) => ({
    name: item.id,
    value: item.value,
  }))

  return ['Viewlet.setInputValues', inputValues]
}
