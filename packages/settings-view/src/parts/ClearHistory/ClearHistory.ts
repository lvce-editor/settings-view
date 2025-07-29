import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const clearHistory = (state: SettingsState): SettingsState => {
  return {
    ...state,
    history: [],
    historyIndex: -1,
  }
}
