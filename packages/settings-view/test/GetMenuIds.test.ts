import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { getMenuIds } from '../src/parts/GetMenuIds/GetMenuIds.ts'

test('getMenuIds includes settings filter and item menus', () => {
  expect(getMenuIds()).toEqual([MenuEntryId.SettingsFilter, MenuEntryId.Settings])
})
