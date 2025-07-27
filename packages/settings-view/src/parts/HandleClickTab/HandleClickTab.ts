import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleClickTab = (state: SettingsState, name: string): SettingsState => {
  if (!name) {
    return state
  }

  const updatedTabs = state.tabs.map(tab => ({
    ...tab,
    selected: tab.label === name,
  }))

  return {
    ...state,
    tabs: updatedTabs,
  }
}
