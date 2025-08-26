import { test, expect } from '@jest/globals'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import { getItemRender } from '../src/parts/GetSettingsItemRenderer/GetSettingsItemRenderer.ts'
import { getItemNumberVirtualDom } from '../src/parts/GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import { getItemCheckBoxVirtualDom } from '../src/parts/GetItemCheckBoxVirtualDom/GetItemCheckBoxVirtualDom.ts'
import { getItemStringVirtualDom } from '../src/parts/GetItemStringVirtualDom/GetItemStringVirtualDom.ts'
import { getItemSelectVirtualDom } from '../src/parts/GetItemSelectVirtualDom/GetItemSelectVirtualDom.ts'
import { getItemColorVirtualDom } from '../src/parts/GetItemColorVirtualDom/GetItemColorVirtualDom.ts'
import { getItemUrlVirtualDom } from '../src/parts/GetItemUrlDom/GetItemUrlDom.ts'
import { getItemUnknownVirtualDom } from '../src/parts/GetItemUnknownVirtualDom/GetItemUnknownVirtualDom.ts'

test('getItemRender returns getItemNumberVirtualDom for SettingItemType.Number', () => {
  const renderer = getItemRender(SettingItemType.Number)
  expect(renderer).toBe(getItemNumberVirtualDom)
})

test('getItemRender returns getItemCheckBoxVirtualDom for SettingItemType.Boolean', () => {
  const renderer = getItemRender(SettingItemType.Boolean)
  expect(renderer).toBe(getItemCheckBoxVirtualDom)
})

test('getItemRender returns getItemStringVirtualDom for SettingItemType.String', () => {
  const renderer = getItemRender(SettingItemType.String)
  expect(renderer).toBe(getItemStringVirtualDom)
})

test('getItemRender returns getItemSelectVirtualDom for SettingItemType.Enum', () => {
  const renderer = getItemRender(SettingItemType.Enum)
  expect(renderer).toBe(getItemSelectVirtualDom)
})

test('getItemRender returns getItemColorVirtualDom for SettingItemType.Color', () => {
  const renderer = getItemRender(SettingItemType.Color)
  expect(renderer).toBe(getItemColorVirtualDom)
})

test('getItemRender returns getItemUrlVirtualDom for SettingItemType.Url', () => {
  const renderer = getItemRender(SettingItemType.Url)
  expect(renderer).toBe(getItemUrlVirtualDom)
})

test('getItemRender returns getItemUnknownVirtualDom for unknown type', () => {
  const renderer = getItemRender(999)
  expect(renderer).toBe(getItemUnknownVirtualDom)
})


