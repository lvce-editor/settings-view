import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'

export interface Dimensions {
  readonly height: number
  readonly width: number
  readonly x: number
  readonly y: number
}

export const resize = (state: SettingsState, dimensions: Dimensions): SettingsState => {
  const { filteredItems, itemHeight, minContentWidth, scrollBarMinHeight, scrollOffset: currentScrollOffset, sideBarMinWidth, sideBarWidth } = state
  const { height, width } = dimensions
  const viewportHeight = getSettingsViewportHeight(height)
  const maxScrollable = Math.max(0, filteredItems.length * itemHeight - viewportHeight)
  const scrollOffset = Math.max(0, Math.min(currentScrollOffset, maxScrollable))
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, viewportHeight, scrollOffset, itemHeight)
  const { thumbHeight, thumbTop } = computeScrollBar(viewportHeight, filteredItems.length, itemHeight, scrollOffset, scrollBarMinHeight)
  const maxSideBarWidth = width - minContentWidth

  return {
    ...state,
    ...dimensions,
    maxLineY,
    minLineY,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
    scrollOffset,
    sideBarWidth: Math.max(sideBarMinWidth, Math.min(sideBarWidth, maxSideBarWidth)),
    visibleItems,
  }
}
