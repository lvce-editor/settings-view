import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeDerivedSectionState } from '../ComputeDerivedSectionState/ComputeDerivedSectionState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getSectionHeightMetrics } from '../GetSectionHeightMetrics/GetSectionHeightMetrics.ts'
import { Script } from '../InputSource/InputSource.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const clear = (state: SettingsState): SettingsState => {
  const { height, items, modifiedSettings, preferences, scrollBarMinHeight, tabs } = state
  const newSearchValue = ''
  const filteredItems = getFilteredItems(items, tabs, newSearchValue, modifiedSettings, preferences)
  const nextScrollOffset = 0
  const sectionHeightMetrics = getSectionHeightMetrics(state)
  const derived = computeDerivedSectionState(filteredItems, height, nextScrollOffset, scrollBarMinHeight, sectionHeightMetrics)
  return {
    ...state,
    ...derived,
    deltaY: 0,
    filteredItems,
    focus: WhenExpression.FocusSettingsInput,
    focusSource: Script,
    inputSource: Script,
    scrollOffset: nextScrollOffset,
    searchValue: newSearchValue,
  }
}
