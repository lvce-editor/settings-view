import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleWheel = (state: SettingsState, deltaY: number, inputSource = User): SettingsState => {
  return {
    ...state,
    deltaY,
    inputSource,
  }
}
