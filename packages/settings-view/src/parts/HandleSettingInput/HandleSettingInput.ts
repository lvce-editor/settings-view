import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { handleSettingUpdate } from '../HandleSettingUpdate/HandleSettingUpdate.ts'
import { User } from '../InputSource/InputSource.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

export const handleSettingInput = (state: SettingsState, name: string, value: string, inputSource = User): SettingsState => {
  const { items } = state

  // TODO maybe have separate input functions for number and string inputs
  const settingItem = items.find((item) => item.id === name)

  if (settingItem && settingItem.type === SettingItemType.Array) {
    try {
      const arrayValue = JSON.parse(value)
      if (!Array.isArray(arrayValue)) {
        return state
      }
      return handleSettingUpdate(state, name, arrayValue, inputSource)
    } catch {
      return state
    }
  }

  if (settingItem && settingItem.type === SettingItemType.Number) {
    const numberValue = value === '' ? '' : Number(value)
    return handleSettingUpdate(state, name, numberValue, inputSource)
  }

  return handleSettingUpdate(state, name, value, inputSource)
}
