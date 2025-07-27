import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const clear = (state: SettingsState): SettingsState => {
  // TODO reset search value
  return {
    ...state,
  }
}
