import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { clamp } from '../Clamp/Clamp.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleWheel = (state: SettingsState, eventDeltaY: number, inputSource = User): SettingsState => {
  const { deltaY: stateDeltaY, filteredItems, height, itemHeight = 1 } = state
  const itemCount = filteredItems.length
  const stepLimit = itemCount === 0 ? 10 : Number.POSITIVE_INFINITY
  const limitedEventDelta = Math.max(-stepLimit, Math.min(stepLimit, eventDeltaY))
  const total = stateDeltaY + limitedEventDelta
  const max = itemCount === 0 ? Number.POSITIVE_INFINITY : Math.max(0, itemCount * itemHeight)
  const clampedDeltaY = clamp(total, 0, max)

  const scrollOffset = clampedDeltaY
  const { visibleItems, minLineY, maxLineY } = computeVisibleItems(filteredItems, height, scrollOffset, itemHeight)

  return {
    ...state,
    deltaY: clampedDeltaY,
    scrollOffset,
    visibleItems,
    minLineY,
    maxLineY,
    inputSource,
  }
}
