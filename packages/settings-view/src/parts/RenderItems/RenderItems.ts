import { diffTree } from '@lvce-editor/virtual-dom-worker'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import { getSettingsDom } from '../GetSettingsDom/GetSettingsDom.ts'

export const renderItems = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const dom = getSettingsDom(newState)
  if (newState.scrollBarActive) {
    // Replacing the view removes the element holding native pointer capture.
    return ['Viewlet.setPatches', newState.id, diffTree(getSettingsDom(oldState), dom)]
  }
  return ['Viewlet.setDom2', newState.id, dom]
}
