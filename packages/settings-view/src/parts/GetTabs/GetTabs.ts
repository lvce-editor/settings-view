import { SettingsWorker } from '@lvce-editor/rpc-registry'
import type { Tab } from '../Tab/Tab.ts'

export const getTabs = async (): Promise<readonly Tab[]> => {
  return SettingsWorker.invoke('SettingsWorker.getTabs')
}
