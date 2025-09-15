import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const isEqual = (oldState: SettingsState, newState: SettingsState): boolean => {
  return oldState.scrollOffset === newState.scrollOffset && oldState.scrollBarThumbHeight === newState.scrollBarThumbHeight
}
