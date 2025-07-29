import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleScroll = (state: SettingsState, scrollTop: number): SettingsState => {
  return {
    ...state,
    scrollOffset: scrollTop,
  }
}
