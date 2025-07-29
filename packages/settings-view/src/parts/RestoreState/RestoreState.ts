import type { RestoredState } from '../RestoredState/RestoredState.ts'

const getSavedMinLineY = (savedState: unknown): number => {
  if (savedState && typeof savedState === 'object' && 'minLineY' in savedState && typeof savedState.minLineY === 'number') {
    return savedState.minLineY
  }
  return 0
}

const getSavedSearchValue = (savedState: unknown): string => {
  if (savedState && typeof savedState === 'object' && 'searchValue' in savedState && typeof savedState.searchValue === 'string') {
    return savedState.searchValue
  }
  return ''
}

const getSavedDeltaY = (savedState: unknown): number => {
  if (savedState && typeof savedState === 'object' && 'deltaY' in savedState && typeof savedState.deltaY === 'number') {
    return savedState.deltaY
  }
  return 0
}

const getSavedWorkspacePath = (savedState: unknown): string => {
  if (savedState && typeof savedState === 'object' && 'workspacePath' in savedState && typeof savedState.workspacePath === 'string') {
    return savedState.workspacePath
  }
  return ''
}

const getSavedTabId = (savedState: unknown): string => {
  if (savedState && typeof savedState === 'object' && 'selectedTab' in savedState && typeof savedState.selectedTab === 'string') {
    return savedState.selectedTab
  }
  return ''
}

const getSavedScrollOffset = (savedState: unknown): number => {
  if (savedState && typeof savedState === 'object' && 'scrollOffset' in savedState && typeof savedState.scrollOffset === 'number') {
    return savedState.scrollOffset
  }
  return 0
}

const getSavedHistory = (savedState: unknown): readonly string[] => {
  if (savedState && typeof savedState === 'object' && 'history' in savedState && Array.isArray(savedState.history)) {
    // Validate that all items are strings and limit to last 10 items
    const validHistory = savedState.history.filter((item): item is string => typeof item === 'string').slice(-10) // Keep only the last 10 items
    return validHistory
  }
  return []
}

const getSavedHistoryIndex = (savedState: unknown, history: readonly string[]): number => {
  if (savedState && typeof savedState === 'object' && 'historyIndex' in savedState && typeof savedState.historyIndex === 'number') {
    const { historyIndex } = savedState
    // Ensure historyIndex is within valid bounds
    if (historyIndex >= 0 && historyIndex < history.length) {
      return historyIndex
    }
  }
  return -1
}

export const restoreState = (savedState: unknown): RestoredState => {
  if (!savedState) {
    return {
      root: '',
      minLineY: 0,
      deltaY: 0,
      tabId: '',
      searchValue: '',
      scrollOffset: 0,
      history: [],
      historyIndex: -1,
    }
  }

  const root = getSavedWorkspacePath(savedState)
  const minLineY = getSavedMinLineY(savedState)
  const deltaY = getSavedDeltaY(savedState)
  const tabId = getSavedTabId(savedState)
  const searchValue = getSavedSearchValue(savedState)
  const scrollOffset = getSavedScrollOffset(savedState)
  const history = getSavedHistory(savedState)
  const historyIndex = getSavedHistoryIndex(savedState, history)

  return {
    root,
    minLineY,
    deltaY,
    tabId,
    searchValue,
    scrollOffset,
    history,
    historyIndex,
  }
}
