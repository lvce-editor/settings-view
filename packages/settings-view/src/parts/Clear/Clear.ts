import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'
import { Script } from '../InputSource/InputSource.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const clear = (state: SettingsState): SettingsState => {
  const { height, itemHeight, items, modifiedSettings, preferences, scrollBarMinHeight, tabs } = state
  const viewportHeight = getSettingsViewportHeight(height)
  const newSearchValue = ''
  const filteredItems = getFilteredItems(items, tabs, newSearchValue, modifiedSettings, preferences)
  const nextScrollOffset = 0
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, viewportHeight, nextScrollOffset, itemHeight)
  const { thumbHeight, thumbTop } = computeScrollBar(viewportHeight, filteredItems.length, itemHeight, nextScrollOffset, scrollBarMinHeight)
  return {
    ...state,
    deltaY: 0,
    filteredItems,
    focus: WhenExpression.FocusSettingsInput,
    focusSource: Script,
    inputSource: Script,
    maxLineY,
    minLineY,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
    scrollOffset: nextScrollOffset,
    searchValue: newSearchValue,
    visibleItems,
  }
}
