import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const renderFocusContext = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const focusKey = WhenExpression.FocusSettingsInput
  return ['Viewlet.setFocusContext', focusKey]
}
