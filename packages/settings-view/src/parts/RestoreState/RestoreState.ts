import type { RestoredState } from '../RestoredState/RestoredState.ts'
import { getSavedDeltaY } from './GetSavedDeltaY.ts'
import { getSavedHistory } from './GetSavedHistory.ts'
import { getSavedHistoryIndex } from './GetSavedHistoryIndex.ts'
import { getSavedMinLineY } from './GetSavedMinLineY.ts'
import { getSavedScrollOffset } from './GetSavedScrollOffset.ts'
import { getSavedSearchValue } from './GetSavedSearchValue.ts'
import { getSavedTabId } from './GetSavedTabId.ts'

export const restoreState = (savedState: unknown): RestoredState => {
  if (!savedState) {
    return {
      deltaY: 0,
      history: [],
      historyIndex: -1,
      minLineY: 0,
      scrollOffset: 0,
      searchValue: '',
      tabId: '',
    }
  }

  const minLineY = getSavedMinLineY(savedState)
  const deltaY = getSavedDeltaY(savedState)
  const tabId = getSavedTabId(savedState)
  const searchValue = getSavedSearchValue(savedState)
  const scrollOffset = getSavedScrollOffset(savedState)
  const history = getSavedHistory(savedState)
  const historyIndex = getSavedHistoryIndex(savedState, history)

  return {
    deltaY,
    history,
    historyIndex,
    minLineY,
    scrollOffset,
    searchValue,
    tabId,
  }
}
