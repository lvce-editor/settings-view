import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleScrollBarPointerCaptureLost = (state: SettingsState): SettingsState => {
  return {
    ...state,
    scrollBarActive: false,
    scrollBarHandleOffset: undefined,
    scrollBarTrackHeight: undefined,
  }
}
