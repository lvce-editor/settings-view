import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderValue = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { id, searchValue } = newState
  return ['Viewlet.setValueByName', id, InputName.SettingsSearch, searchValue]
}
