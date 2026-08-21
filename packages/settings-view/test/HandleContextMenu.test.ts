import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { createMockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleContextMenu } from '../src/parts/HandleContextMenu/HandleContextMenu.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('handleContextMenu shows the setting context menu', async () => {
  const mockRpc = createMockRpc({
    commandMap: {
      'ContextMenu.show2': () => undefined,
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
  expect(mockRpc.invocations).toEqual([
    ['ContextMenu.show2', id, MenuEntryId.Settings, 100, 200, { menuId: MenuEntryId.Settings, settingId: 'editor.fontSize' }],
  ])
})

test('handleContextMenu ignores unknown settings', async () => {
  const mockRpc = createMockRpc({
    commandMap: {},
  })
  RendererWorker.set(mockRpc)
  const state = createDefaultState()

  const result = await handleContextMenu(state, 'editor.unknown', 100, 200)

  expect(result).toBe(state)
})
