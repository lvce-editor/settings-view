import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { handleSettingUpdate } from '../HandleSettingUpdate/HandleSettingUpdate.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleSettingChecked = (state: SettingsState, name: string, value: string, source = User): SettingsState => {
  return handleSettingUpdate(state, name, value, source)
}
