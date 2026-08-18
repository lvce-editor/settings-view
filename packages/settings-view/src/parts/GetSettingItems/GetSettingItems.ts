import { SettingsWorker } from '@lvce-editor/rpc-registry'
import type { SettingItem } from '../SettingItem/SettingItem.ts'

export const getSettingItems = async (): Promise<readonly SettingItem[]> => {
  return SettingsWorker.invoke('SettingsWorker.getSettingsItems2')
}
