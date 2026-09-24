import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import { User } from '../InputSource/InputSource.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

const enabledTypes: readonly number[] = [
  SettingItemType.Array,
  SettingItemType.Enum,
  SettingItemType.Number,
  SettingItemType.String,
  SettingItemType.Color,
]

const getInputValue = (type: number, value: any): any => {
  if (type === SettingItemType.Array) {
    return JSON.stringify(value)
  }
  return value
}

const shouldRenderSettingValue = (oldState: SettingsState, newState: SettingsState, item: SettingsState['filteredItems'][number]): boolean => {
  if (item.type !== SettingItemType.Color || newState.inputSource !== User) {
    return true
  }
  return oldState.preferences[item.id] === newState.preferences[item.id]
}

export const renderSettingValues = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { filteredItems, id, preferences } = newState
  const enabledSettings = filteredItems.filter((item) => enabledTypes.includes(item.type) && shouldRenderSettingValue(oldState, newState, item))
  const inputValues = enabledSettings.map((item) => {
    const value = getInputValue(item.type, preferences[item.id] ?? item.value)
    return {
      name: item.id,
      value,
    }
  })
  return ['Viewlet.setInputValues', id, inputValues]
}
