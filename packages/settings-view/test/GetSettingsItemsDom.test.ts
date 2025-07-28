import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import { getSettingsItemsDom } from '../src/parts/GetSettingsItemsDom/GetSettingsItemsDom.ts'

test('getSettingsItemsDom returns items when items array is not empty', () => {
  const items: SettingItem[] = [
    {
      id: 'fontSize',
      heading: 'Font Size',
      description: 'The font size of the editor',
      type: SettingItemType.Number,
      value: 14,
      category: 'editor',
    },
  ]
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(8) // 1 container div + 7 item elements
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItem',
    childCount: 2,
    role: 'group',
  })
})

test('getSettingsItemsDom returns empty array when items array is empty', () => {
  const items: SettingItem[] = []
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 0,
  })
})

test('getSettingsItemsDom handles multiple items correctly', () => {
  const items: SettingItem[] = [
    {
      id: 'fontSize',
      heading: 'Font Size',
      description: 'The font size of the editor',
      type: SettingItemType.Number,
      value: 14,
      category: 'editor',
    },
    {
      id: 'theme',
      heading: 'Theme',
      description: 'The theme of the editor',
      type: SettingItemType.String,
      value: 'dark',
      category: 'editor',
    },
  ]
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(15) // 1 container div + 14 item elements (7 per item)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 2,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItem',
    childCount: 2,
    role: 'group',
  })
  expect(result[8]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItem',
    childCount: 2,
    role: 'group',
  })
})
