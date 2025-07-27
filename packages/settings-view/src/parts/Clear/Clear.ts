import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { Script } from '../InputSource/InputSource.ts'

export const clear = (state: SettingsState): SettingsState => {
  return {
    ...state,
    searchValue: '',
    inputSource: Script,
  }
}
