import type { SavedState } from '../SavedState/SavedState.ts'
import { get } from '../SettingsStates/SettingsStates.ts'

export const saveState = (uid: number): SavedState => {
  const { newState } = get(uid)
  const selectedTab = newState.tabs.find((tab) => tab.selected)?.id || ''

  return {
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue: newState.searchValue,
    selectedTab,
  }
}
