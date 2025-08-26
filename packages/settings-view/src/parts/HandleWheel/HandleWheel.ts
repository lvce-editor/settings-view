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
  const max = itemCount === 0 ? Number.POSITIVE_INFINITY : Math.max(0, itemCount * itemHeight)
  const clampedDeltaY = clamp(total, 0, max)

  const scrollOffset = clampedDeltaY
  const { visibleItems, minLineY, maxLineY } = computeVisibleItems(filteredItems, height, scrollOffset, itemHeight)
  const { thumbHeight, thumbTop } = computeScrollBar(height, filteredItems.length, itemHeight, scrollOffset)

  return {
    ...state,
    deltaY: clampedDeltaY,
    scrollOffset,
    visibleItems,
    minLineY,
    maxLineY,
    inputSource,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
  }
}
