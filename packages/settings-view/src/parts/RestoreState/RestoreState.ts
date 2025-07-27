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

export const restoreState = (savedState: unknown): RestoredState => {
  if (!savedState) {
    return {
      root: '',
      minLineY: 0,
      deltaY: 0,
      tabId: '',
      searchValue: '',
    }
  }

  const root = getSavedWorkspacePath(savedState)
  const minLineY = getSavedMinLineY(savedState)
  const deltaY = getSavedDeltaY(savedState)
  const tabId = getSavedTabId(savedState)
  const searchValue = getSavedSearchValue(savedState)
  return {
    root,
    minLineY,
    deltaY,
    tabId,
    searchValue,
  }
}
