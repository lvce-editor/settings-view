import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderFocus = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { id } = newState
  const selector = `[name="${InputName.SettingsSearch}"]`
  return ['Viewlet.focusSelector', id, selector]
}
