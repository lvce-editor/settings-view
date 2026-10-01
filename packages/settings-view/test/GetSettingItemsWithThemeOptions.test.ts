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
      type: 2,
      value: 'slime',
    },
  ]

  const result = await getSettingItemsWithThemeOptions(items, { 'workbench.colorTheme': 'removed-theme' })

  expect(invoke).toHaveBeenCalledWith('ColorTheme.getColorThemeNames')
  expect(result[0].options).toEqual([
    { id: 'slime', label: 'slime' },
    { id: 'cobalt2', label: 'cobalt2' },
    { id: 'removed-theme', label: 'removed-theme (Unavailable)' },
  ])
  expect(result).toHaveLength(1)
  expect(result[0].type).toBe(1)
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

  const result = await getSettingItemsWithThemeOptions([item], {})

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

  const result = await getSettingItemsWithThemeOptions(items, { 'workbench.colorTheme': 'cobalt2' })

  expect(result[0].options).toEqual([
    { id: 'slime', label: 'slime' },
    { id: 'cobalt2', label: 'cobalt2' },
  ])
})

test('getSettingItemsWithThemeOptions removes duplicate canonical theme rows', async () => {
  const invoke = jest.fn<(...args: readonly unknown[]) => Promise<readonly string[]>>().mockResolvedValue(['slime'])
  RendererWorker.set({ invoke } as never)
  const themeItem = {
    category: 'workbench',
    description: 'The color theme of the workbench',
    heading: 'Color Theme',
    id: 'workbench.colorTheme',
    type: 2,
    value: 'slime',
  }
  const duplicateThemeItem = { ...themeItem, heading: 'Theme', type: 1 }

  const result = await getSettingItemsWithThemeOptions([themeItem, duplicateThemeItem], {})

  expect(result).toHaveLength(1)
  expect(result[0].heading).toBe('Color Theme')
  expect(result[0].type).toBe(1)
})

test('getSettingItemsWithThemeOptions preserves the current theme if discovery is unavailable', async () => {
  const invoke = jest.fn<(...args: readonly unknown[]) => Promise<readonly string[]>>().mockRejectedValue(new Error('method unavailable'))
  RendererWorker.set({ invoke } as never)
  const items = [
    {
      category: 'workbench',
      description: 'The color theme of the workbench',
      heading: 'Color Theme',
      id: 'workbench.colorTheme',
      type: 2,
      value: 'slime',
    },
  ]

  const result = await getSettingItemsWithThemeOptions(items, { 'workbench.colorTheme': 'removed-theme' })

  expect(result[0].options).toEqual([{ id: 'removed-theme', label: 'removed-theme (Unavailable)' }])
})
