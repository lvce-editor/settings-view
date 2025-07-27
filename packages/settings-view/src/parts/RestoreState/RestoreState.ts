import type { RestoredState } from '../RestoredState/RestoredState.ts'

const getSavedMinLineY = (savedState: unknown): number => {
  if (savedState && typeof savedState === 'object' && 'minLineY' in savedState && typeof savedState.minLineY === 'number') {
    return savedState.minLineY
  }
  return 0
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
  if (savedState && typeof savedState === 'object' && 'tabId' in savedState && typeof savedState.tabId === 'string') {
    return savedState.tabId
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
    }
  }

  const root = getSavedWorkspacePath(savedState)
  const minLineY = getSavedMinLineY(savedState)
  const deltaY = getSavedDeltaY(savedState)
  const tabId = getSavedTabId(savedState)
  return {
    root,
    minLineY,
    deltaY,
    tabId,
  }
}
