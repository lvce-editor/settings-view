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
    tabs: [],
    items: [],
    searchValue: '',
  }
  SettingsStates.set(id, state, state)
}
