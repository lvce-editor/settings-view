import { test, expect } from '@jest/globals'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import type { Tab } from '../src/parts/Tab/Tab.ts'
import { filterBySearch } from '../src/parts/FilterBySearch/FilterBySearch.ts'
import { filterByTab } from '../src/parts/FilterByTab/FilterByTab.ts'
import { getFilteredItems } from '../src/parts/GetFilteredItems/GetFilteredItems.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('filterByTab should filter items based on selected tab', () => {
  const items: readonly SettingItem[] = [
    {
      category: InputName.TextEditorTab,
      description: 'The font size of the editor',
      heading: 'Font Size',
      id: 'fontSize',
      type: SettingItemType.Number,
      value: '15px',
    },
    {
      category: InputName.WorkbenchTab,
      description: 'The color theme of the workbench',
      heading: 'Theme',
      id: 'theme',
      type: SettingItemType.String,
      value: 'Dark',
    },
  ]

  const tabs: readonly Tab[] = [
    {
      id: InputName.TextEditorTab,
      label: 'Text Editor',
      selected: true,
    },
    {
      id: InputName.WorkbenchTab,
      label: 'Workbench',
      selected: false,
    },
  ]

  const result = filterByTab(items, tabs)
  expect(result).toHaveLength(1)
  expect(result[0].id).toBe('fontSize')
})

test('filterByTab should return all items when no tab is selected', () => {
  const items: readonly SettingItem[] = [
    {
      category: InputName.TextEditorTab,
      description: 'The font size of the editor',
      heading: 'Font Size',
      id: 'fontSize',
      type: SettingItemType.Number,
      value: '15px',
    },
    {
      category: InputName.WorkbenchTab,
      description: 'The color theme of the workbench',
      heading: 'Theme',
      id: 'theme',
      type: SettingItemType.String,
      value: 'Dark',
    },
  ]

  const tabs: readonly Tab[] = [
    {
      id: InputName.TextEditorTab,
      label: 'Text Editor',
      selected: false,
    },
    {
      id: InputName.WorkbenchTab,
      label: 'Workbench',
      selected: false,
    },
  ]

  const result = filterByTab(items, tabs)
  expect(result).toHaveLength(2)
})

test('filterBySearch should filter items by search value when provided', () => {
  const items: readonly SettingItem[] = [
    {
      category: InputName.TextEditorTab,
      description: 'The font size of the editor',
      heading: 'Font Size',
      id: 'fontSize',
      type: SettingItemType.Number,
      value: '15px',
    },
    {
      category: InputName.TextEditorTab,
      description: 'The font family of the editor',
      heading: 'Font Family',
      id: 'fontFamily',
      type: SettingItemType.String,
      value: 'Monaco',
    },
    {
      category: InputName.TextEditorTab,
      description: 'The color theme of the workbench',
      heading: 'Theme',
      id: 'theme',
      type: SettingItemType.String,
      value: 'Dark',
    },
  ]

  const result = filterBySearch(items, 'font')
  expect(result).toHaveLength(2)
  expect(result[0].id).toBe('fontSize')
  expect(result[1].id).toBe('fontFamily')
})

test('filterBySearch should filter items case-insensitively', () => {
  const items: readonly SettingItem[] = [
    {
      category: InputName.TextEditorTab,
      description: 'The font size of the editor',
      heading: 'Font Size',
      id: 'fontSize',
      type: SettingItemType.Number,
      value: '15px',
    },
    {
      category: InputName.TextEditorTab,
      description: 'The color theme of the workbench',
      heading: 'Theme',
      id: 'theme',
      type: SettingItemType.String,
      value: 'Dark',
    },
  ]

  const result = filterBySearch(items, 'FONT')
  expect(result).toHaveLength(1)
  expect(result[0].id).toBe('fontSize')
})

test('filterBySearch should return all items when search value is empty', () => {
  const items: readonly SettingItem[] = [
    {
      category: InputName.TextEditorTab,
      description: 'The font size of the editor',
      heading: 'Font Size',
      id: 'fontSize',
      type: SettingItemType.Number,
      value: '15px',
    },
    {
      category: InputName.TextEditorTab,
      description: 'The color theme of the workbench',
      heading: 'Theme',
      id: 'theme',
      type: SettingItemType.String,
      value: 'Dark',
    },
  ]

  const result = filterBySearch(items, '')
  expect(result).toHaveLength(2)
})

test('filterBySearch should return all items when search value is only whitespace', () => {
  const items: readonly SettingItem[] = [
    {
      category: InputName.TextEditorTab,
      description: 'The font size of the editor',
      heading: 'Font Size',
      id: 'fontSize',
      type: SettingItemType.Number,
      value: '15px',
    },
    {
      category: InputName.TextEditorTab,
      description: 'The color theme of the workbench',
      heading: 'Theme',
      id: 'theme',
      type: SettingItemType.String,
      value: 'Dark',
    },
  ]

  const result = filterBySearch(items, '   ')
  expect(result).toHaveLength(2)
})

test('getFilteredItems should combine all operations correctly and return DisplaySettingItem', () => {
  const items: readonly SettingItem[] = [
    {
      category: InputName.TextEditorTab,
      description: 'The font size of the editor',
      heading: 'Font Size',
      id: 'fontSize',
      type: SettingItemType.Number,
      value: '15px',
    },
    {
      category: InputName.WorkbenchTab,
      description: 'The color theme of the workbench',
      heading: 'Theme',
      id: 'theme',
      type: SettingItemType.String,
      value: 'Dark',
    },
    {
      category: InputName.WorkbenchTab,
      description: 'The workbench theme',
      heading: 'Workbench Theme',
      id: 'workbenchTheme',
      type: SettingItemType.String,
      value: 'Light',
    },
  ]

  const tabs: readonly Tab[] = [
    {
      id: InputName.WorkbenchTab,
      label: 'Workbench',
      selected: true,
    },
  ]

  const preferences = { theme: true }

  const result = getFilteredItems(items, tabs, 'theme', preferences, preferences)
  expect(result).toHaveLength(2)
  expect(result[0].id).toBe('theme')
  expect(result[0].modified).toBe(true)
  expect(result[0].hasError).toBe(false)
  expect(result[0].errorMessage).toBe('')
  expect(result[1].id).toBe('workbenchTheme')
  expect(result[1].modified).toBe(false)
  expect(result[1].hasError).toBe(false)
  expect(result[1].errorMessage).toBe('')
})
