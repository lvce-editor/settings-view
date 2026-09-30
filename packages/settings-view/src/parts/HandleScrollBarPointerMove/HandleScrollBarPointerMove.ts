import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { clamp } from '../Clamp/Clamp.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleScrollBarPointerMove = (state: SettingsState, clientY: number): SettingsState => {
  const { scrollBarActive } = state
  if (!scrollBarActive) {
    return state
  }

  const { filteredItems, height, itemHeight, scrollBarHandleOffset = 0, scrollBarThumbHeight, scrollBarTrackHeight } = state
  const viewportHeight = getSettingsViewportHeight(height)
  const totalHeight = filteredItems.length * itemHeight
  const maxScrollable = Math.max(0, totalHeight - viewportHeight)
  const availableTrackHeight = (scrollBarTrackHeight ?? viewportHeight) - scrollBarThumbHeight
  if (maxScrollable <= 0 || availableTrackHeight <= 0) {
    return state
  }

  const thumbTop = clamp(clientY - scrollBarHandleOffset, 0, availableTrackHeight)
  const scrollOffset = (thumbTop / availableTrackHeight) * maxScrollable
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, viewportHeight, scrollOffset, itemHeight)

  return {
    ...state,
    deltaY: scrollOffset,
    inputSource: User,
    maxLineY,
    minLineY,
    scrollBarThumbTop: thumbTop,
    scrollOffset,
    visibleItems,
  }
}
