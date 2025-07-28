import { test, expect } from '@jest/globals'
import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getSettingsItemsDom } from '../src/parts/GetSettingsItemsDom/GetSettingsItemsDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('getSettingsItemsDom returns items when items array is not empty', () => {
  const items: readonly SettingItem[] = [
    {
      heading: 'Test Item 1',
      description: 'Description 1',
      id: 'item-1',
      type: SettingItemType.Number,
      value: 42,
      category: 'test',
    },
  ]

  const result = getSettingsItemsDom(items, '')

  expect(result).toHaveLength(8)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItems,
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItem',
    childCount: 1,
    role: 'group',
  })
})

test('getSettingsItemsDom returns empty array when items array is empty', () => {
  const items: readonly SettingItem[] = []

  const result = getSettingsItemsDom(items, '')

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItems,
    childCount: 0,
  })
})

test('getSettingsItemsDom handles multiple items correctly', () => {
  const items: readonly SettingItem[] = [
    {
      heading: 'Test Item 1',
      description: 'Description 1',
      id: 'item-1',
      type: SettingItemType.String,
      value: 'value1',
      category: 'test',
    },
    {
      heading: 'Test Item 2',
      description: 'Description 2',
      id: 'item-2',
      type: SettingItemType.Boolean,
      value: true,
      category: 'test',
    },
  ]

  const result = getSettingsItemsDom(items, '')

  expect(result).toHaveLength(16)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItems,
    childCount: 2,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItem',
    childCount: 1,
    role: 'group',
  })
  // Verify that we have the correct number of items
  const settingsItems = result.filter(item =>
    item.type === VirtualDomElements.Div &&
    item.className === 'SettingsItem'
  )
  expect(settingsItems).toHaveLength(2)
})
