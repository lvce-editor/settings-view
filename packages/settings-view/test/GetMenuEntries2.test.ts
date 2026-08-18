import { expect, test } from '@jest/globals'
import { MenuEntryId, MenuItemFlags } from '@lvce-editor/constants'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getMenuEntries2 } from '../src/parts/GetMenuEntries2/GetMenuEntries2.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getMenuEntries2 returns the filter entries', () => {
  const state = createDefaultState()
  const result = getMenuEntries2(state, { menuId: MenuEntryId.SettingsFilter })

  expect(result).toHaveLength(10)
  expect(result[0].id).toBe('filter-advanced')
})

test('getMenuEntries2 returns an enabled reset entry for a modified setting', () => {
  const state = {
    ...createDefaultState(),
    modifiedSettings: { 'editor.fontSize': true },
  }
  const result = getMenuEntries2(state, { menuId: MenuEntryId.Settings, settingId: 'editor.fontSize' })

  expect(result).toEqual([
    {
      args: ['editor.fontSize'],
      command: 'Settings.resetSetting',
      flags: MenuItemFlags.None,
      id: 'resetSetting',
      label: SettingStrings.resetSetting(),
    },
  ])
})

test('getMenuEntries2 disables reset for an unmodified setting', () => {
  const state = createDefaultState()
  const result = getMenuEntries2(state, { menuId: MenuEntryId.Settings, settingId: 'editor.fontSize' })

  expect(result[0].flags).toBe(MenuItemFlags.Disabled)
})
