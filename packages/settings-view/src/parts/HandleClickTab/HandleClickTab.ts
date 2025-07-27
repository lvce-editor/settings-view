import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'

export const handleClickTab = (state: SettingsState, name: string): SettingsState => {
  if (!name) {
    return state
  }

  return {
    ...state,
    tabs: getUpdatedTabs(state.tabs, name),
  }
}
