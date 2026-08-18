import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickFilterButton } from '../src/parts/HandleClickFilterButton/HandleClickFilterButton.ts'

test('handleClickFilterButton uses pointer coordinates', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })

  const state: SettingsState = { ...createDefaultState(), id: 123 }
  const result = await handleClickFilterButton(state, 100, 200)

  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([['ContextMenu.show2', 123, MenuEntryId.SettingsFilter, 100, 200, { menuId: MenuEntryId.SettingsFilter }]])
})

test('handleClickFilterButton derives the filter-button position for keyboard clicks', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })

  const state: SettingsState = {
    ...createDefaultState(),
    id: 456,
    width: 800,
    x: 100,
    y: 200,
  }
  const result = await handleClickFilterButton(state, 0, 0)

  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([['ContextMenu.show2', 456, MenuEntryId.SettingsFilter, 866, 227, { menuId: MenuEntryId.SettingsFilter }]])
})
