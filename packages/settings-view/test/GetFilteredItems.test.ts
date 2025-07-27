import { test, expect } from '@jest/globals'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import type { Tab } from '../src/parts/Tab/Tab.ts'
import { getFilteredItems } from '../src/parts/GetFilteredItems/GetFilteredItems.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('should filter items based on selected tab', () => {
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
      id: 'theme',
      heading: 'Theme',
      description: 'The color theme of the workbench',
      type: SettingItemType.String,
      value: 'Dark',
      category: InputName.WorkbenchTab,
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

  const result = getFilteredItems(items, tabs)
  expect(result).toHaveLength(1)
  expect(result[0].id).toBe('fontSize')
})

test('should return all items when no tab is selected', () => {
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
      id: 'theme',
      heading: 'Theme',
      description: 'The color theme of the workbench',
      type: SettingItemType.String,
      value: 'Dark',
      category: InputName.WorkbenchTab,
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

  const result = getFilteredItems(items, tabs)
  expect(result).toHaveLength(2)
})

test('should return empty array when no items match selected tab', () => {
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

  const tabs: readonly Tab[] = [
    {
      id: InputName.WorkbenchTab,
      label: 'Workbench',
      selected: true,
    },
  ]

  const result = getFilteredItems(items, tabs)
  expect(result).toHaveLength(0)
})
