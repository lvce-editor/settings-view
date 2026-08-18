import { expect, test } from '@jest/globals'
import { SettingsWorker } from '@lvce-editor/rpc-registry'
import { getSettingItems } from '../src/parts/GetSettingItems/GetSettingItems.ts'

test('getSettingItems loads serializable items from the settings worker', async () => {
  const expected = [
    {
      category: 'Text Editor',
      description: 'Controls the font size in pixels.',
      heading: 'Font Size',
      id: 'editor.fontSize',
      type: 2,
      validationId: 1,
      value: 15,
    },
  ]
  using mockRpc = SettingsWorker.registerMockRpc({
    'SettingsWorker.getSettingsItems2': () => expected,
  })

  const items = await getSettingItems()

  expect(items).toBe(expected)
  expect(mockRpc.invocations).toEqual([['SettingsWorker.getSettingsItems2']])
})
