import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const isEqual = (oldState: SettingsState, newState: SettingsState): boolean => {
  return (
    oldState.sideBarWidth === newState.sideBarWidth &&
    oldState.filteredItems.length === newState.filteredItems.length &&
    oldState.itemHeight === newState.itemHeight &&
    oldState.scrollOffset === newState.scrollOffset &&
    oldState.scrollBarThumbHeight === newState.scrollBarThumbHeight &&
    oldState.scrollBarThumbTop === newState.scrollBarThumbTop
  )
}
