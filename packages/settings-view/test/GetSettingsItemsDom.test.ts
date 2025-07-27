import { expect, test } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import { getSettingsItemsDom } from '../src/parts/GetSettingsItemsDom/GetSettingsItemsDom.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingsItemsDom returns items when items array is not empty', () => {
  const items: readonly SettingItem[] = [
    {
      id: 'fontSize',
      heading: 'Font Size',
      description: 'The font size of the editor',
      type: SettingItemType.Number,
      value: '15px',
      category: InputName.TextEditorTab,
    },
  ]
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(7) // 1 container div + 6 item elements
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 1,
  })
})

test('getSettingsItemsDom shows no settings matching message when items is empty and search value is provided', () => {
  const items: readonly SettingItem[] = []
  const searchValue = 'nonexistent'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsNoResults',
    childCount: 1,
  })
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom shows items when items is empty but search value is empty', () => {
  const items: readonly SettingItem[] = []
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 0,
  })
})

test('getSettingsItemsDom shows items when items is empty but search value is only whitespace', () => {
  const items: readonly SettingItem[] = []
  const searchValue = '   '

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 0,
  })
})

test('getSettingsItemsDom shows no settings matching message with special characters in search term', () => {
  const items: readonly SettingItem[] = []
  const searchValue = 'test@123!'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom shows no settings matching message with unicode characters in search term', () => {
  const items: readonly SettingItem[] = []
  const searchValue = 'café'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom shows no settings matching message with very long search term', () => {
  const items: readonly SettingItem[] = []
  const searchValue = 'a'.repeat(1000)

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom shows no settings matching message with single character search term', () => {
  const items: readonly SettingItem[] = []
  const searchValue = 'x'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom handles multiple items correctly', () => {
  const items: readonly SettingItem[] = [
    {
      id: 'fontSize',
      heading: 'Font Size',
      description: 'The font size of the editor',
      type: SettingItemType.Number,
      value: '15px',
      category: InputName.TextEditorTab,
    },
    {
      id: 'fontFamily',
      heading: 'Font Family',
      description: 'The font family of the editor',
      type: SettingItemType.String,
      value: 'Monaco',
      category: InputName.TextEditorTab,
    },
  ]
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(13) // 1 container div + 12 item elements (6 per item)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 2,
  })
})

test('getSettingsItemsDom handles null-like search values', () => {
  const items: readonly SettingItem[] = []
  const searchValue = 'null'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom handles undefined-like search values', () => {
  const items: readonly SettingItem[] = []
  const searchValue = 'undefined'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom handles search value with leading and trailing whitespace', () => {
  const items: readonly SettingItem[] = []
  const searchValue = '  test  '

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom handles search value with newlines and tabs', () => {
  const items: readonly SettingItem[] = []
  const searchValue = '\t\ntest\n\t'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})
