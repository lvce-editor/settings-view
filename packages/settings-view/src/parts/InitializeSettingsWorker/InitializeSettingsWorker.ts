import { SettingsWorker } from '@lvce-editor/rpc-registry'
import * as LaunchSettingsWorker from '../LaunchSettingsWorker/LaunchSettingsWorker.ts'

export const initializeSettingsWorker = async (): Promise<void> => {
  const rpc = await LaunchSettingsWorker.launchSettingsWorker()
  SettingsWorker.set(rpc)
}
