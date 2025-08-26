import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { User } from '../InputSource/InputSource.ts'
import { clamp } from '../Clamp/Clamp.ts'

export const handleWheel = (state: SettingsState, deltaY: number, inputSource = User): SettingsState => {
  const total = (state.deltaY || 0) + deltaY
  const itemCount = state.filteredItems.length
  const itemHeight = state.itemHeight || 1
  const max = Math.max(0, itemCount * itemHeight)
  const clamped = clamp(total, 0, max)
  return {
    ...state,
    deltaY: clamped,
    inputSource,
  }
}
