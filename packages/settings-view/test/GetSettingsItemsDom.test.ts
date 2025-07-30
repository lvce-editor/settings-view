import { expect, test } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import { getSettingsItemsDom } from '../src/parts/GetSettingsItemsDom/GetSettingsItemsDom.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingsItemsDom returns items when items array is not empty', () => {
  const items: readonly DisplaySettingItem[] = [
    {
      id: 'fontSize',
      heading: 'Font Size',
      description: 'The font size of the editor',
      type: SettingItemType.Number,
      value: '15px',
      category: InputName.TextEditorTab,
      modified: false,
      errorMessage: '',
      hasError: false,
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
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'nonexistent'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.P,
    className: 'SettingsNoResults',
    childCount: 1,
  })
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom shows items when items is empty but search value is empty', () => {
  const items: readonly DisplaySettingItem[] = []
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
  const items: readonly DisplaySettingItem[] = []
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
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'test@123!'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom shows no settings matching message with unicode characters in search term', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'café'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom shows no settings matching message with very long search term', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'a'.repeat(1000)

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom shows no settings matching message with single character search term', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'x'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom handles multiple items correctly', () => {
  const items: readonly DisplaySettingItem[] = [
    {
      id: 'fontSize',
      heading: 'Font Size',
      description: 'The font size of the editor',
      type: SettingItemType.Number,
      value: '15px',
      category: InputName.TextEditorTab,
      modified: false,
      errorMessage: '',
      hasError: false,
    },
    {
      id: 'fontFamily',
      heading: 'Font Family',
      description: 'The font family of the editor',
      type: SettingItemType.String,
      value: 'monospace',
      category: InputName.TextEditorTab,
      modified: false,
      errorMessage: '',
      hasError: false,
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
  const items: readonly DisplaySettingItem[] = []
  const searchValue = null as any

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 0,
  })
})

test('getSettingsItemsDom handles undefined-like search values', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = undefined as any

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItems',
    childCount: 0,
  })
})

test('getSettingsItemsDom handles search value with leading and trailing whitespace', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = '  test  '

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom handles search value with newlines and tabs', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = '\ttest\n'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})
