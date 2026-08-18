import { expect, test } from '@jest/globals'
import { SettingsWorker } from '@lvce-editor/rpc-registry'
import { getTabs } from '../src/parts/GetTabs/GetTabs.ts'

test('getTabs loads tabs from the settings worker', async () => {
  const expected = [
    { id: 'text-editor', label: 'Text Editor', selected: true },
    { id: 'workbench', label: 'Workbench', selected: false },
    { id: 'window', label: 'Window', selected: false },
    { id: 'features', label: 'Features', selected: false },
    { id: 'applications', label: 'Applications', selected: false },
    { id: 'security', label: 'Security', selected: false },
    { id: 'extensions', label: 'Extensions', selected: false },
  ]
  using mockRpc = SettingsWorker.registerMockRpc({
    'SettingsWorker.getTabs': () => expected,
  })

  const result = await getTabs()

  expect(result).toBe(expected)
  expect(mockRpc.invocations).toEqual([['SettingsWorker.getTabs']])
})
