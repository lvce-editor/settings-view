import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { clamp } from '../Clamp/Clamp.ts'
import { computeDerivedSectionState } from '../ComputeDerivedSectionState/ComputeDerivedSectionState.ts'
import { getSectionHeightMetrics } from '../GetSectionHeightMetrics/GetSectionHeightMetrics.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleWheel = (state: SettingsState, eventDeltaY: number, inputSource = User): SettingsState => {
  const { deltaY: deltaY, filteredItems, height, scrollBarMinHeight, totalContentHeight } = state
  const itemCount = filteredItems.length
  const stepLimit = itemCount === 0 ? 10 : Number.POSITIVE_INFINITY
  const limitedEventDelta = Math.max(-stepLimit, Math.min(stepLimit, eventDeltaY))
  const total = deltaY + limitedEventDelta
  // Prevent scrolling beyond the available content height. If content is smaller
  // than the viewport, the maximum scroll is zero.
  const maxScrollable = Math.max(0, totalContentHeight - height)
  const clampedDeltaY = clamp(total, 0, maxScrollable)

  const scrollOffset = clampedDeltaY
  const sectionHeightMetrics = getSectionHeightMetrics(state)
  const derived = computeDerivedSectionState(filteredItems, height, scrollOffset, scrollBarMinHeight, sectionHeightMetrics)

  return {
    ...state,
    ...derived,
    deltaY: clampedDeltaY,
    inputSource,
    scrollOffset,
  }
}
