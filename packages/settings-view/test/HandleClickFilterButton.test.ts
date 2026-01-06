import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickFilterButton } from '../src/parts/HandleClickFilterButton/HandleClickFilterButton.ts'

test('handleClickFilterButton returns the state', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method.includes('showContextMenu') || method.includes('ContextMenu')) {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state: SettingsState = createDefaultState()
  const result = await handleClickFilterButton(state, 100, 200)
  expect(result).toEqual(state)
  expect(mockRpc.invocations.length).toBe(1)
})

test('handleClickFilterButton returns same state object', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method.includes('showContextMenu') || method.includes('ContextMenu')) {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state: SettingsState = createDefaultState()
  const result = await handleClickFilterButton(state, 100, 200)
  expect(result).toBe(state)
})
