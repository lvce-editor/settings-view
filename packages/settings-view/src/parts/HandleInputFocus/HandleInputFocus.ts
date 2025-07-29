import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as FocusId from '../FocusId/FocusId.ts'

export const handleInputFocus = (state: SettingsState): SettingsState => {
  return {
    ...state,
    focus: FocusId.SearchInput,
  }
}
