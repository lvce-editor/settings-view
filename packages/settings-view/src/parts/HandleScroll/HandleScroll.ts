import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'

export const handleScroll = (state: SettingsState, scrollTop: number, inputSource = InputSource.User): SettingsState => {
  const { filteredItems, height, itemHeight } = state
  const { visibleItems, minLineY, maxLineY } = computeVisibleItems(filteredItems, height, scrollTop, itemHeight)
  return {
    ...state,
    scrollOffset: scrollTop,
    minLineY,
    maxLineY,
    visibleItems,
    inputSource,
  }
}
