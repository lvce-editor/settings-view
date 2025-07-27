import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleInput = (state: SettingsState, value: string): SettingsState => {
  return {
    ...state,
    searchValue: value,
  }
}
