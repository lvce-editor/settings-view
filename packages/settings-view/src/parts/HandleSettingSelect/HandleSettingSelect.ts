import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleSettingSelect = (state: SettingsState, name: string, value: string): SettingsState => {
  // TODO update value
  return {
    ...state,
  }
}
