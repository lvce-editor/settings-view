import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleResizerPointerMove = (state: SettingsState, eventX: number, eventY: number): SettingsState => {
  return {
    ...state,
    sideBarWidth: eventX,
  }
}
