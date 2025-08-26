import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const handleScroll = (state: SettingsState, scrollTop: number, inputSource = InputSource.User): SettingsState => {
  return {
    ...state,
    scrollOffset: scrollTop,
    inputSource,
  }
}
