import { type Rpc, LazyTransferMessagePortRpcParent } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as SettingsWorkerCommandMap from '../SettingsWorkerCommandMap/SettingsWorkerCommandMap.ts'

const send = async (port: any): Promise<void> => {
  await RendererWorker.sendMessagePortToSettingsWorker(port, 0)
}

export const launchSettingsWorker = async (): Promise<Rpc> => {
  return LazyTransferMessagePortRpcParent.create({
    commandMap: SettingsWorkerCommandMap.commandMap,
    send,
  })
}
