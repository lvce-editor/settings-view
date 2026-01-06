import { ViewletCommand } from '@lvce-editor/constants'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getCss } from '../GetCss/GetCss.ts'

export const renderCss = (oldState: SettingsState, newState: SettingsState): any => {
  const { id, sideBarWidth } = newState
  const css = getCss(sideBarWidth)
  return [ViewletCommand.SetCss, id, css]
}
