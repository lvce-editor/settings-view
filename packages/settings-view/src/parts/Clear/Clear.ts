import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const clear = (state: SettingsState): SettingsState => {
  return {
    ...state,
    searchValue: '',
  }
}
