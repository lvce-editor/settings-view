import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const loadContent = async (state: SettingsState, savedState: unknown): Promise<SettingsState> => {
  return {
    ...state,
  }
}
