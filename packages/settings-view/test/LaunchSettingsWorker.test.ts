import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as LaunchSettingsWorker from '../src/parts/LaunchSettingsWorker/LaunchSettingsWorker.ts'

test('launchSettingsWorker connects lazily through the renderer worker', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'SendMessagePortToExtensionHostWorker.sendMessagePortToSettingsWorker': () => undefined,
  })

  const rpc = await LaunchSettingsWorker.launchSettingsWorker()
  expect(mockRpc.invocations).toEqual([])

  await Promise.resolve(rpc.send('SettingsWorker.getSettingsItems2'))

  expect(mockRpc.invocations).toEqual([
    ['SendMessagePortToExtensionHostWorker.sendMessagePortToSettingsWorker', expect.anything(), 'HandleMessagePort.handleMessagePort', 0],
  ])
  await rpc.dispose()
})
