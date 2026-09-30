import { expect, jest, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { getSettingItemsWithThemeOptions } from '../src/parts/GetSettingItemsWithThemeOptions/GetSettingItemsWithThemeOptions.ts'

test('getSettingItemsWithThemeOptions adds discovered themes and preserves an unavailable saved theme', async () => {
  const invoke = jest.fn<(...args: readonly unknown[]) => Promise<readonly string[]>>().mockResolvedValue(['slime', 'cobalt2'])
  RendererWorker.set({ invoke } as never)
  const items = [
    {
      category: 'workbench',
      description: 'The color theme of the workbench',
      heading: 'Color Theme',
      id: 'workbench.colorTheme',
      type: 1,
      value: 'slime',
    },
  ]

  const result = await getSettingItemsWithThemeOptions(items, 42, { 'workbench.colorTheme': 'removed-theme' })

  expect(invoke).toHaveBeenCalledWith('Application.executeForView', 42, 'ColorTheme.getColorThemeNames')
  expect(result[0].options).toEqual([
    { id: 'slime', label: 'slime' },
    { id: 'cobalt2', label: 'cobalt2' },
    { id: 'removed-theme', label: 'removed-theme (Unavailable)' },
  ])
})

test('getSettingItemsWithThemeOptions leaves unrelated rows unchanged', async () => {
  const item = {
    category: 'editor',
    description: 'Editor font family',
    heading: 'Font Family',
    id: 'editor.fontFamily',
    type: 2,
    value: 'monospace',
  }

  const result = await getSettingItemsWithThemeOptions([item], 42, {})

  expect(result).toEqual([item])
})

test('getSettingItemsWithThemeOptions does not duplicate the selected available theme', async () => {
  const invoke = jest.fn<(...args: readonly unknown[]) => Promise<readonly string[]>>().mockResolvedValue(['slime', 'cobalt2'])
  RendererWorker.set({ invoke } as never)
  const items = [
    {
      category: 'workbench',
      description: 'The color theme of the workbench',
      heading: 'Color Theme',
      id: 'workbench.colorTheme',
      type: 1,
      value: 'slime',
    },
  ]

  const result = await getSettingItemsWithThemeOptions(items, 42, { 'workbench.colorTheme': 'cobalt2' })

  expect(result[0].options).toEqual([
    { id: 'slime', label: 'slime' },
    { id: 'cobalt2', label: 'cobalt2' },
  ])
})
