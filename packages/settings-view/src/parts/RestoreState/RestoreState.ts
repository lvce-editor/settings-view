import type { RestoredState } from '../RestoredState/RestoredState.ts'
import { getSavedDeltaY } from './GetSavedDeltaY.ts'
import { getSavedHistory } from './GetSavedHistory.ts'
import { getSavedHistoryIndex } from './GetSavedHistoryIndex.ts'
import { getSavedMinLineY } from './GetSavedMinLineY.ts'
import { getSavedScrollOffset } from './GetSavedScrollOffset.ts'
import { getSavedSearchValue } from './GetSavedSearchValue.ts'
import { getSavedTabId } from './GetSavedTabId.ts'
import { getSavedWorkspacePath } from './GetSavedWorkspacePath.ts'

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
