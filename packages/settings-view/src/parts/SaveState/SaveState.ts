import type { SavedState } from '../SavedState/SavedState.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getSelectedTabId } from '../GetSelectedTab/GetSelectedTab.ts'

export const saveState = (state: SettingsState): SavedState => {
  const { tabs, searchValue, scrollOffset, focus, history, historyIndex } = state
  const selectedTab = getSelectedTabId(tabs)
  return {
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    searchValue,
    selectedTab,
    scrollOffset,
    focus,
    history,
    historyIndex,
  }
}
