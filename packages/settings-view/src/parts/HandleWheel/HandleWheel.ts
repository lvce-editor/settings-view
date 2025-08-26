import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { clamp } from '../Clamp/Clamp.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleWheel = (state: SettingsState, eventDeltaY: number, inputSource = User): SettingsState => {
  const { deltaY: stateDeltaY = 0, filteredItems, itemHeight = 1 } = state
  const total = stateDeltaY + eventDeltaY
  const itemCount = filteredItems.length
  const max = itemCount === 0 ? Number.POSITIVE_INFINITY : Math.max(0, itemCount * itemHeight)
  const clamped = clamp(total, 0, max)
  return {
    ...state,
    deltaY: clamped,
    inputSource,
  }
}
