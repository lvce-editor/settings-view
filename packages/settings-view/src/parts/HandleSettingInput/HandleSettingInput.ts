import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { User } from '../InputSource/InputSource.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import { updateSetting } from '../UpdateSetting/UpdateSetting.ts'

export const handleSettingInput = async (state: SettingsState, name: string, value: string, inputSource = User): Promise<SettingsState> => {
  const { items } = state

  // TODO maybe have separate input functions for number and string inputs
  const settingItem = items.find((item) => item.id === name)

  if (settingItem && settingItem.type === SettingItemType.Array) {
    try {
      const arrayValue = JSON.parse(value)
      if (!Array.isArray(arrayValue)) {
        return state
      }
      return updateSetting(state, name, arrayValue, inputSource)
    } catch {
      return state
    }
  }

  if (settingItem && settingItem.type === SettingItemType.Number) {
    const numberValue = value === '' ? '' : Number(value)
    return updateSetting(state, name, numberValue, inputSource)
  }

  return updateSetting(state, name, value, inputSource)
}
