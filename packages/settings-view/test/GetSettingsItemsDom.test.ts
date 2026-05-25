import { expect, test } from '@jest/globals'
import { mergeClassNames, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import type { VisibleSection } from '../src/parts/VisibleSection/VisibleSection.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getSettingsItemsDom } from '../src/parts/GetSettingsItemsDom/GetSettingsItemsDom.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

const createVisibleSection = (item: DisplaySettingItem, index: number, top: number, height: number) => {
  return {
    className: `Section-${index + 1}`,
    height,
    index,
    item,
    top,
  }
}

test('getSettingsItemsDom returns items when items array is not empty', () => {
  const item: DisplaySettingItem = {
    category: InputName.TextEditorTab,
    description: 'The font size of the editor',
    errorMessage: '',
    hasError: false,
    heading: 'Font Size',
    id: 'fontSize',
    modified: false,
    type: SettingItemType.Number,
    value: '15px',
  }
  const visibleSections = [createVisibleSection(item, 0, 0, 75)]
  const searchValue = ''

  const result = getSettingsItemsDom(visibleSections, 1, searchValue, 0, 0)

  expect(result).toHaveLength(8) // 1 container div + 1 wrapper + 6 item elements
  expect(result[0]).toEqual({
    childCount: 1,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual({
    childCount: 1,
    className: mergeClassNames(ClassNames.SettingsSection, 'Section-1'),
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom shows no settings matching message when items is empty and search value is provided', () => {
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = 'nonexistent'

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

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
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = ''

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    childCount: 0,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom shows items when items is empty but search value is only whitespace', () => {
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = '   '

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    childCount: 0,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom shows no settings matching message with special characters in search term', () => {
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = 'test@123!'

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

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
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = 'café'

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

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
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = 'a'.repeat(1000)

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

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
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = 'x'

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

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
  const visibleSections = [createVisibleSection(items[0], 0, 0, 75), createVisibleSection(items[1], 1, 75, 75)]
  const searchValue = ''

  const result = getSettingsItemsDom(visibleSections, items.length, searchValue, 0, 0)

  expect(result).toHaveLength(15) // 1 container div + 2 wrappers + 12 item elements
  expect(result[0]).toEqual({
    childCount: 2,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom handles empty string search values', () => {
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = ''

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

  expect(result).toHaveLength(1)
  expect(result[0]).toEqual({
    childCount: 0,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
})

test('getSettingsItemsDom handles search value with leading and trailing whitespace', () => {
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = '  test  '

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

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
  const visibleSections: readonly VisibleSection[] = []
  const searchValue = '\ttest\n'

  const result = getSettingsItemsDom(visibleSections, 0, searchValue, 0, 0)

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

test('getSettingsItemsDom renders top and bottom spacers around visible sections', () => {
  const item: DisplaySettingItem = {
    category: InputName.TextEditorTab,
    description: 'The font size of the editor',
    errorMessage: '',
    hasError: false,
    heading: 'Font Size',
    id: 'fontSize',
    modified: false,
    type: SettingItemType.Number,
    value: '15px',
  }
  const visibleSections = [createVisibleSection(item, 1, 75, 75)]

  const result = getSettingsItemsDom(visibleSections, 2, '', 75, 50)

  expect(result[0]).toEqual({
    childCount: 3,
    className: 'SettingsItems',
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual({
    childCount: 0,
    className: ClassNames.SettingsItemsSpacer,
    height: '75px;',
    type: VirtualDomElements.Div,
  })
  expect(result[result.length - 1]).toEqual({
    childCount: 0,
    className: ClassNames.SettingsItemsSpacer,
    height: '50px;',
    type: VirtualDomElements.Div,
  })
})
