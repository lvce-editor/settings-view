import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as SettingsStates from '../SettingsStates/SettingsStates.ts'

export const create = (id: number, uri: string, x: number, y: number, width: number, height: number): void => {
  const state: SettingsState = {
    breakPointsExpanded: false,
    breakPointsVisible: false,
    deltaY: 0,
    filteredItems: [],
    filteredItemsCount: 0,
    focus: 0,
    focusSource: 0,
    height,
    highlightsEnabled: false,
    history: [],
    historyIndex: -1,
    id,
    inputSource: 0,
    itemHeight: 100,
    items: [],
    maxLineY: 0,
    minContentWidth: 300,
    minLineY: 0,
    modifiedSettings: {},
    preferences: {},
    scrollBarMinHeight: 0,
    scrollBarThumbHeight: 0,
    scrollBarThumbTop: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarMinWidth: 100,
    sideBarWidth: 0,
    tabs: [],
    uri,
    visibleItems: [],
    width,
    x,
    y,
  }
  SettingsStates.set(id, state, state)
}
