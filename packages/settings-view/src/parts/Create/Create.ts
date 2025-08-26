import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as SettingsStates from '../SettingsStates/SettingsStates.ts'

export const create = (id: number, uri: string, x: number, y: number, width: number, height: number): void => {
  const state: SettingsState = {
    breakPointsExpanded: false,
    breakPointsVisible: false,
    focus: 0,
    id,
    uri,
    x,
    y,
    width,
    height,
    deltaY: 0,
    itemHeight: 100,
    tabs: [],
    items: [],
    searchValue: '',
    highlightsEnabled: false,
    filteredItems: [],
    preferences: {},
    inputSource: 0,
    scrollOffset: 0,
    minLineY: 0,
    maxLineY: 0,
    visibleItems: [],
    filteredItemsCount: 0,
    history: [],
    historyIndex: -1,
    modifiedSettings: {},
    focusSource: 0,
    scrollBarMinHeight: 0,
    scrollBarThumbHeight: 0,
    scrollBarThumbTop: 0,
  }
  SettingsStates.set(id, state, state)
}
