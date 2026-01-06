import type { SavedState } from '../SavedState/SavedState.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getSelectedTabId } from '../GetSelectedTab/GetSelectedTab.ts'

export const saveState = (state: SettingsState): SavedState => {
  const { focus, history, historyIndex, scrollOffset, searchValue, sideBarWidth, tabs } = state
  const selectedTab = getSelectedTabId(tabs)
  return {
    deltaY: 0,
    focus,
    history,
    historyIndex,
    maxLineY: 0,
    minLineY: 0,
    scrollOffset,
    searchValue,
    selectedTab,
    sideBarWidth,
  }
}
