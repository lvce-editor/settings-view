import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'

export const handleScrollBarPointerDown = (state: SettingsState, clientY: number, trackHeight: number): SettingsState => {
  const { filteredItems, height, itemHeight, scrollBarThumbHeight, scrollBarThumbTop } = state
  if (trackHeight <= scrollBarThumbHeight || filteredItems.length * itemHeight <= getSettingsViewportHeight(height)) {
    return state
  }
  return {
    ...state,
    scrollBarActive: true,
    scrollBarHandleOffset: clientY - scrollBarThumbTop,
    scrollBarTrackHeight: trackHeight,
  }
}
