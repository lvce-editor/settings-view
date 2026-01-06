import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'

export const renderCss = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { id } = newState
  return ['', id]
}
