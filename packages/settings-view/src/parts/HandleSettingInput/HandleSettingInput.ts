import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleSettingInput = (state: SettingsState, name: string, value: string, inputSource = User): SettingsState => {
  // TODO update value
  return {
    ...state,
    inputSource,
  }
}
