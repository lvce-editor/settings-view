import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const createDefaultState = (): SettingsState => {
  return {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    focus: 0,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
    itemHeight: 100,
    tabs: [],
    items: [],
    filteredItems: [],
    searchValue: '',
    preferences: {},
    inputSource: 0,
    filteredItemsCount: 0,
    scrollOffset: 0,
    history: [],
    historyIndex: -1,
    modifiedSettings: {},
    focusSource: 0,
  }
}
