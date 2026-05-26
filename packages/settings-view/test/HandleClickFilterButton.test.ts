import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickFilterButton } from '../src/parts/HandleClickFilterButton/HandleClickFilterButton.ts'

test('handleClickFilterButton returns the state', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'Viewlet.showContextMenu': () => undefined,
  })
  expect(mockRpc).toBeDefined()

  const state: SettingsState = createDefaultState()
  const result = await handleClickFilterButton(state, 100, 200)
  expect(result).toEqual(state)
})

test('handleClickFilterButton returns same state object', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'Viewlet.showContextMenu': () => undefined,
  })
  expect(mockRpc).toBeDefined()

  const state: SettingsState = createDefaultState()
  const result = await handleClickFilterButton(state, 100, 200)
  expect(result).toBe(state)
})
