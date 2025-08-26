import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { User } from '../InputSource/InputSource.ts'

export const handleWheel = (state: SettingsState, deltaY: number, inputSource = User): SettingsState => {
  const newDeltaY = (state.deltaY || 0) + deltaY
  console.log({ newDeltaY })
  return {
    ...state,
    deltaY: newDeltaY,
    inputSource,
  }
}
