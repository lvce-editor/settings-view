import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const handleScroll = (state: SettingsState, scrollTop: number, inputSource = InputSource.User): SettingsState => {
  const { height, itemHeight, filteredItems } = state
  const { thumbHeight, thumbTop } = computeScrollBar(height, filteredItems.length, itemHeight, scrollTop)
  return {
    ...state,
    scrollOffset: scrollTop,
    inputSource,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
  }
}
