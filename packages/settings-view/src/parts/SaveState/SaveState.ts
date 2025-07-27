import type { SavedState } from '../SavedState/SavedState.ts'
import { SettingsState } from '../SettingsState/SettingsState.ts'

export const saveState = (state: SettingsState): SavedState => {
  const selectedTab = state.tabs.find((tab) => tab.selected)?.id || ''

  return {
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: state.searchValue,
    selectedTab,
  }
}
