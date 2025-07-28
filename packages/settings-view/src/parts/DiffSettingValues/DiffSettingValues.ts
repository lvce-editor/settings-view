import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const isEqual = (oldState: SettingsState, newState: SettingsState): boolean => {
  if (oldState.filteredItems === newState.filteredItems) {
    return true
  }

  if (oldState.filteredItems.length !== newState.filteredItems.length) {
    return false
  }

  for (let i = 0; i < oldState.filteredItems.length; i++) {
    if (oldState.filteredItems[i] !== newState.filteredItems[i]) {
      return false
    }
  }

  return true
}
