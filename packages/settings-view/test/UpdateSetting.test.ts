import { expect, jest, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { Script, User } from '../src/parts/InputSource/InputSource.ts'
import { updateSetting } from '../src/parts/UpdateSetting/UpdateSetting.ts'

test('updateSetting persists user edits through the renderer preferences API', async () => {
  const invoke = jest.fn<(...args: readonly unknown[]) => Promise<void>>().mockResolvedValue(undefined)
  RendererWorker.set({ invoke } as never)

  const state = {
    ...createDefaultState(),
    preferences: { 'editor.fontFamily': 'Fira Code', 'editor.fontSize': 15 },
  }
  const { id } = state
  const result = await updateSetting(state, 'editor.fontFamily', 'serif', User)

  expect(result.preferences).toEqual({ 'editor.fontFamily': 'serif', 'editor.fontSize': 15 })
  expect(invoke).toHaveBeenCalledWith('Application.executeForView', id, 'Preferences.update', { 'editor.fontFamily': 'serif' })
})

test('updateSetting does not persist script updates', async () => {
  const invoke = jest.fn<(...args: readonly unknown[]) => Promise<void>>().mockResolvedValue(undefined)
  RendererWorker.set({ invoke } as never)

  await updateSetting(createDefaultState(), 'editor.fontFamily', 'serif', Script)

  expect(invoke).not.toHaveBeenCalled()
})

test('updateSetting applies and persists color theme selections through the color theme API', async () => {
  const invoke = jest.fn<(...args: readonly unknown[]) => Promise<void>>().mockResolvedValue(undefined)
  RendererWorker.set({ invoke } as never)
  const state = createDefaultState()
  const { id } = state

  const result = await updateSetting(state, 'workbench.colorTheme', 'cobalt2', User)

  expect(result.preferences).toEqual({ 'workbench.colorTheme': 'cobalt2' })
  expect(invoke).toHaveBeenCalledWith('Application.executeForView', id, 'ColorTheme.setColorTheme', 'cobalt2')
})
