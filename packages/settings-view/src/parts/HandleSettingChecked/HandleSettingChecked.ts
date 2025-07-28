import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleSettingChecked = (state: SettingsState, name: string, value: string): SettingsState => {
  // TODO update value
  return {
    ...state,
  }
}
