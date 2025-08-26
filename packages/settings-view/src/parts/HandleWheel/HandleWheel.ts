import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { clamp } from '../Clamp/Clamp.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleWheel = (state: SettingsState, eventDeltaY: number, inputSource = User): SettingsState => {
  const { deltaY: stateDeltaY, filteredItems, itemHeight = 1 } = state
  const total = stateDeltaY + eventDeltaY
  const itemCount = filteredItems.length
  const max = Math.max(0, itemCount * itemHeight)
  const clamped = clamp(total, 0, max)
  console.log({ clamped })
  return {
    ...state,
    deltaY: clamped,
    inputSource,
  }
}
