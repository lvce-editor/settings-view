import { getSelectedTabId } from '../GetSelectedTab/GetSelectedTab.ts'
import type { SavedState } from '../SavedState/SavedState.ts'
import { SettingsState } from '../SettingsState/SettingsState.ts'

export const saveState = (state: SettingsState): SavedState => {
  const { tabs, searchValue } = state
  const selectedTab = getSelectedTabId(tabs)
  return {
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue,
    selectedTab,
  }
}
