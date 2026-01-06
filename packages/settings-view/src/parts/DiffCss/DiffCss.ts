import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const isEqual = (oldState: SettingsState, newState: SettingsState): boolean => {
<<<<<<< HEAD
  return oldState.scrollOffset === newState.scrollOffset && oldState.scrollBarThumbHeight === newState.scrollBarThumbHeight
=======
  return oldState.sideBarWidth === newState.sideBarWidth
>>>>>>> origin/main
}
