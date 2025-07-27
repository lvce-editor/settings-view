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
    tabs: [],
    items: [],
    searchValue: '',
  }
}
