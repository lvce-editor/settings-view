import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as FocusId from '../FocusId/FocusId.ts'

export const handleInputBlur = (state: SettingsState): SettingsState => {
  return {
    ...state,
    focus: FocusId.None,
  }
}
