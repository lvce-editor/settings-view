import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeDerivedSectionState } from '../ComputeDerivedSectionState/ComputeDerivedSectionState.ts'
import { getSectionHeightMetrics } from '../GetSectionHeightMetrics/GetSectionHeightMetrics.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const handleScroll = (state: SettingsState, scrollTop: number, inputSource = InputSource.User): SettingsState => {
  const { filteredItems, height, scrollBarMinHeight } = state
  const sectionHeightMetrics = getSectionHeightMetrics(state)
  const derived = computeDerivedSectionState(filteredItems, height, scrollTop, scrollBarMinHeight, sectionHeightMetrics)
  return {
    ...state,
    ...derived,
    inputSource,
    scrollOffset: scrollTop,
  }
}
