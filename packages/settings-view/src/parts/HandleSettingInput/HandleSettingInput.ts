import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { handleSettingUpdate } from '../HandleSettingUpdate/HandleSettingUpdate.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleSettingInput = (state: SettingsState, name: string, value: string, inputSource = User): SettingsState => {
  return handleSettingUpdate(state, name, value, inputSource)
}
