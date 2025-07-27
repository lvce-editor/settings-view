import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { User } from '../InputSource/InputSource.ts'

export const isEqual = (oldState: SettingsState, newState: SettingsState): boolean => {
  return newState.inputSource === User || oldState.searchValue === newState.searchValue
}
