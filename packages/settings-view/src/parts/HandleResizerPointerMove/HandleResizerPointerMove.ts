import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleResizerPointerMove = (state: SettingsState, eventX: number, eventY: number): SettingsState => {
  const { minContentWidth, sideBarMinWidth, width } = state
  const maxSideBarWidth = width - minContentWidth
  const newWidth = Math.max(sideBarMinWidth, Math.min(eventX, maxSideBarWidth))
  return {
    ...state,
    sideBarWidth: newWidth,
  }
}
