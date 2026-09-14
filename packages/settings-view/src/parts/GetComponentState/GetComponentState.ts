import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as SettingsStates from '../SettingsStates/SettingsStates.ts'

export const getComponentState = (uid: number): SettingsState => {
  return SettingsStates.get(uid).newState
}
