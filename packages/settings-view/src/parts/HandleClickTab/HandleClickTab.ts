import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleClickTab = (state: SettingsState, name: string): SettingsState => {
  // TODO mark that tab as selected
  return {
    ...state,
  }
}
