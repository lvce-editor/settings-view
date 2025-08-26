import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import { getSettingsDom } from '../GetSettingsDom/GetSettingsDom.ts'

export const renderItems = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const dom = getSettingsDom(newState)
  return ['Viewlet.setDom2', newState.id, dom]
}
