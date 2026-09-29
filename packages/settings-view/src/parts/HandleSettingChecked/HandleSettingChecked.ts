import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { User } from '../InputSource/InputSource.ts'
import { updateSetting } from '../UpdateSetting/UpdateSetting.ts'

export const handleSettingChecked = (state: SettingsState, name: string, value: string, source = User): Promise<SettingsState> => {
  return updateSetting(state, name, value, source)
}
