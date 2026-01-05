import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { clamp } from '../Clamp/Clamp.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleWheel = (state: SettingsState, eventDeltaY: number, inputSource = User): SettingsState => {
  const { deltaY: deltaY, filteredItems, height, itemHeight = 1 } = state
  const itemCount = filteredItems.length
  const stepLimit = itemCount === 0 ? 10 : Number.POSITIVE_INFINITY
  const limitedEventDelta = Math.max(-stepLimit, Math.min(stepLimit, eventDeltaY))
  const total = deltaY + limitedEventDelta
  // Prevent scrolling beyond the available content height. If content is smaller
  // than the viewport, the maximum scroll is zero.
  const totalContentHeight = itemCount * itemHeight
  const maxScrollable = Math.max(0, totalContentHeight - height)
  const clampedDeltaY = clamp(total, 0, maxScrollable)

  const scrollOffset = clampedDeltaY
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, height, scrollOffset, itemHeight)
  const { scrollBarMinHeight } = state
  const { thumbHeight, thumbTop } = computeScrollBar(height, filteredItems.length, itemHeight, scrollOffset, scrollBarMinHeight)

  return {
    ...state,
    deltaY: clampedDeltaY,
    inputSource,
    maxLineY,
    minLineY,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
    scrollOffset,
    visibleItems,
  }
}
