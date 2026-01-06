<<<<<<< HEAD
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'

export const renderCss = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const { id } = newState
  const css = `.Settings {
  --ScrollBarThumbHeight: ${newState.scrollBarThumbHeight}px;
  --ScrollBarThumbTop: ${newState.scrollBarThumbTop}px;
}`
  return ['Viewlet.setCss', id, css]
=======
import { ViewletCommand } from '@lvce-editor/constants'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getCss } from '../GetCss/GetCss.ts'

export const renderCss = (oldState: SettingsState, newState: SettingsState): any => {
  const { id, sideBarWidth } = newState
  const css = getCss(sideBarWidth)
  return [ViewletCommand.SetCss, id, css]
>>>>>>> origin/main
}
