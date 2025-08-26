import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { Script } from '../InputSource/InputSource.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'

export const clear = (state: SettingsState): SettingsState => {
  const { items, tabs, modifiedSettings, preferences, height, itemHeight, scrollBarMinHeight } = state
  const newSearchValue = ''
  const filteredItems = getFilteredItems(items, tabs, newSearchValue, modifiedSettings, preferences)
  const nextScrollOffset = 0
  const { visibleItems, minLineY, maxLineY } = computeVisibleItems(filteredItems, height, nextScrollOffset, itemHeight)
  const { thumbHeight, thumbTop } = computeScrollBar(height, filteredItems.length, itemHeight, nextScrollOffset, scrollBarMinHeight)
  return {
    ...state,
    filteredItems,
    visibleItems,
    minLineY,
    maxLineY,
    deltaY: 0,
    scrollOffset: nextScrollOffset,
    focus: WhenExpression.FocusSettingsInput,
    focusSource: Script,
    inputSource: Script,
    searchValue: newSearchValue,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
  }
}
