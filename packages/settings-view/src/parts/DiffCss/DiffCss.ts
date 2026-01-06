import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const isEqual = (oldState: SettingsState, newState: SettingsState): boolean => {
  return (
    oldState.sideBarWidth === newState.sideBarWidth &&
    oldState.scrollBarThumbHeight === newState.scrollBarThumbHeight &&
    oldState.scrollBarThumbTop === newState.scrollBarThumbTop
  )
}
