import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'

export const renderScrollOffset = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { id, scrollOffset } = newState
  const selector = '.SettingsContent'
  return ['Viewlet.setScrollTop', id, selector, scrollOffset]
}
