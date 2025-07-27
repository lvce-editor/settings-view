import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getTabs } from '../GetTabs/GetTabs.ts'

export const loadContent = async (state: SettingsState, savedState: unknown): Promise<SettingsState> => {
  const tabs = getTabs()
  return {
    ...state,
    tabs,
  }
}
