import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'

export const renderFocus = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const selector = '' // TODO
  return ['Viewlet.setFocus', newState.id, selector]
}
