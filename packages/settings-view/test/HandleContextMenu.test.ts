import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleContextMenu } from '../src/parts/HandleContextMenu/HandleContextMenu.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('handleContextMenu shows the setting context menu', async () => {
  const calls: unknown[][] = []
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly unknown[]) => {
      calls.push([method, ...args])
    },
  })
  RendererWorker.set(mockRpc)
  const state = {
    ...createDefaultState(),
    items: [
      {
        category: 'editor',
        description: 'The font size of the editor',
        heading: 'Font Size',
        id: 'editor.fontSize',
        type: SettingItemType.Number,
        value: 15,
      },
    ],
  }

  const result = await handleContextMenu(state, 'editor.fontSize', 100, 200)

  expect(result).toBe(state)
  const { id } = state
  expect(calls).toEqual([['ContextMenu.show2', id, MenuEntryId.Settings, 100, 200, { menuId: MenuEntryId.Settings, settingId: 'editor.fontSize' }]])
})

test('handleContextMenu ignores unknown settings', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  const state = createDefaultState()

  const result = await handleContextMenu(state, 'editor.unknown', 100, 200)

  expect(result).toBe(state)
})
