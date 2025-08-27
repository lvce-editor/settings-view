import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'

export const renderCss = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { id } = newState
  const css = `.Settings {
  --ScrollBarThumbHeight: ${newState.scrollBarThumbHeight}px;
  --ScrollBarThumbTop: ${newState.scrollBarThumbTop}px;
}`
  return ['Viewlet.setCss', id, css]
}
