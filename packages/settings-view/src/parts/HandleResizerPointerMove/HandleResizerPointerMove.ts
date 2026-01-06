import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleResizerPointerMove = (state: SettingsState, eventX: number, eventY: number): SettingsState => {
  const { sideBarMinWidth } = state
  const newWidth = Math.max(eventX, sideBarMinWidth)
  return {
    ...state,
    sideBarWidth: newWidth,
  }
}
