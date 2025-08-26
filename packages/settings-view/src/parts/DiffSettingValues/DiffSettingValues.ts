import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const isEqual = (oldState: SettingsState, newState: SettingsState): boolean => {
  return oldState.filteredItems === newState.filteredItems && oldState.visibleItems === newState.visibleItems
}
