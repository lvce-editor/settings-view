import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { handleSettingChecked } from '../HandleSettingChecked/HandleSettingChecked.ts'

export const handleCheckboxBoxClick = (state: SettingsState, name: string, currentValue: string): SettingsState => {
  // Toggle the checked state
  const newValue = currentValue === 'true' ? 'false' : 'true'

  // Call the same handler as the input would
  return handleSettingChecked(state, name, newValue)
}

