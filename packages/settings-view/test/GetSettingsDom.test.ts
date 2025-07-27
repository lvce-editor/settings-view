import { expect, test } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getSettingsDom } from '../src/parts/GetSettingsDom/GetSettingsDom.ts'
import { getTabs } from '../src/parts/GetTabs/GetTabs.ts'

test('getSettingsDom returns array of VirtualDomNode objects', () => {
  const mockState: SettingsState = {
    ...createDefaultState(),
    tabs: getTabs(),
    filteredItems: [],
  }
  const domNodes = getSettingsDom(mockState)
  expect(domNodes).toBeDefined()
})
