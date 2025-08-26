import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { User } from '../InputSource/InputSource.ts'
import { ITEM_HEIGHT } from '../ItemHeight/ItemHeight.ts'
import { clamp } from '../Clamp/Clamp.ts'

export const handleWheel = (state: SettingsState, deltaY: number, inputSource = User): SettingsState => {
  const total = (state.deltaY || 0) + deltaY
  const itemCount = state.filteredItems.length
  const max = Math.max(0, itemCount * ITEM_HEIGHT)
  const clamped = clamp(total, 0, max)
  return {
    ...state,
    deltaY: clamped,
    inputSource,
  }
}
