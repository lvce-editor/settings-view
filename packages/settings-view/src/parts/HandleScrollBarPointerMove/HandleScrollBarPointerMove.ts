import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { clamp } from '../Clamp/Clamp.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleScrollBarPointerMove = (state: SettingsState, clientY: number): SettingsState => {
  {
    const { height, scrollBarActive, scrollBarHandleOffset, scrollBarThumbTop, x, y } = state
    console.warn(
      '[DEBUG-settings-drag] HandleScrollBarPointerMove',
      JSON.stringify({ clientY, height, scrollBarActive, scrollBarHandleOffset, scrollBarThumbTop, x, y }),
    )
  }
  const { scrollBarActive } = state
  if (!scrollBarActive) {
    return state
  }

  const { filteredItems, height, itemHeight, scrollBarHandleOffset = 0, scrollBarMinHeight, scrollOffset: currentScrollOffset, y } = state
  const viewportHeight = getSettingsViewportHeight(height)
  const totalHeight = filteredItems.length * itemHeight
  const maxScrollable = Math.max(0, totalHeight - viewportHeight)
  const { thumbHeight } = computeScrollBar(viewportHeight, filteredItems.length, itemHeight, currentScrollOffset, scrollBarMinHeight)
  const availableTrackHeight = viewportHeight - thumbHeight
  if (maxScrollable <= 0 || availableTrackHeight <= 0) {
    return state
  }

  const trackTop = y + height - viewportHeight
  const thumbTop = clamp(clientY - trackTop - scrollBarHandleOffset, 0, availableTrackHeight)
  const scrollOffset = (thumbTop / availableTrackHeight) * maxScrollable
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, viewportHeight, scrollOffset, itemHeight)
  const { thumbHeight: nextThumbHeight, thumbTop: nextThumbTop } = computeScrollBar(
    viewportHeight,
    filteredItems.length,
    itemHeight,
    scrollOffset,
    scrollBarMinHeight,
  )

  return {
    ...state,
    deltaY: scrollOffset,
    inputSource: User,
    maxLineY,
    minLineY,
    scrollBarThumbHeight: nextThumbHeight,
    scrollBarThumbTop: nextThumbTop,
    scrollOffset,
    visibleItems,
  }
}
