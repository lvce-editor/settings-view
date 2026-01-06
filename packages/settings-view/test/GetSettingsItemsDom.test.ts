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
      category: InputName.TextEditorTab,
      description: 'The font size of the editor',
      errorMessage: '',
      hasError: false,
      heading: 'Font Size',
      id: 'fontSize',
      modified: false,
      type: SettingItemType.Number,
      value: '15px',
    },
  ]
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(7) // 1 container div + 6 item elements
  expect(result[0]).toEqual({
    childCount: 1,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom shows no settings matching message when items is empty and search value is provided', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'nonexistent'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(3)
  expect(result[0]).toEqual({
    childCount: 1,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual({
    childCount: 1,
    className: 'SettingsNoResults',
    type: VirtualDomElements.P,
  })
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsItemsDom shows items when items is empty but search value is empty', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    childCount: 0,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom shows items when items is empty but search value is only whitespace', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = '   '

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    childCount: 0,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom shows no settings matching message with special characters in search term', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'test@123!'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toEqual([
    {
      childCount: 1,
      className: 'SettingsItems',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'SettingsNoResults',
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ])
})

test('getSettingsItemsDom shows no settings matching message with unicode characters in search term', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'café'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toEqual([
    {
      childCount: 1,
      className: 'SettingsItems',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'SettingsNoResults',
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ])
})

test('getSettingsItemsDom shows no settings matching message with very long search term', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'a'.repeat(1000)

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toEqual([
    {
      childCount: 1,
      className: 'SettingsItems',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'SettingsNoResults',
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ])
})

test('getSettingsItemsDom shows no settings matching message with single character search term', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = 'x'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toEqual([
    {
      childCount: 1,
      className: 'SettingsItems',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'SettingsNoResults',
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ])
})

test('getSettingsItemsDom handles multiple items correctly', () => {
  const items: readonly DisplaySettingItem[] = [
    {
      category: InputName.TextEditorTab,
      description: 'The font size of the editor',
      errorMessage: '',
      hasError: false,
      heading: 'Font Size',
      id: 'fontSize',
      modified: false,
      type: SettingItemType.Number,
      value: '15px',
    },
    {
      category: InputName.TextEditorTab,
      description: 'The font family of the editor',
      errorMessage: '',
      hasError: false,
      heading: 'Font Family',
      id: 'fontFamily',
      modified: false,
      type: SettingItemType.String,
      value: 'monospace',
    },
  ]
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(13) // 1 container div + 12 item elements (6 per item)
  expect(result[0]).toEqual({
    childCount: 2,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom handles empty string search values', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = ''

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    childCount: 0,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom handles search value with leading and trailing whitespace', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = '  test  '

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toEqual([
    {
      childCount: 1,
      className: 'SettingsItems',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'SettingsNoResults',
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ])
})

test('getSettingsItemsDom handles search value with newlines and tabs', () => {
  const items: readonly DisplaySettingItem[] = []
  const searchValue = '\ttest\n'

  const result = getSettingsItemsDom(items, searchValue)

  expect(result).toEqual([
    {
      childCount: 1,
      className: 'SettingsItems',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'SettingsNoResults',
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ])
})
