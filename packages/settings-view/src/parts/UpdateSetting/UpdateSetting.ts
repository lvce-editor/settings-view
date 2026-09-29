import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { handleSettingUpdate } from '../HandleSettingUpdate/HandleSettingUpdate.ts'
import { User } from '../InputSource/InputSource.ts'

export const updateSetting = async (state: SettingsState, name: string, value: any, inputSource: number): Promise<SettingsState> => {
  const { id } = state
  const newState = handleSettingUpdate(state, name, value, inputSource)
  if (inputSource === User && newState !== state) {
    await RendererWorker.invoke('Application.executeForView', id, 'Preferences.update', { [name]: value })
  }
  return newState
}
