import { test, expect } from '@jest/globals'
import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getItemSelectVirtualDom } from '../src/parts/GetItemSelectVirtualDom/GetItemSelectVirtualDom.ts'

test('getItemSelectVirtualDom returns correct DOM structure for normal item', () => {
  const item: SettingItem = {
    heading: 'Test Heading',
    description: 'Test Description',
    id: 'test-id',
    type: 1,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom: readonly VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Test Heading'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Test Description'),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 2,
      name: 'test-id',
      onChange: DomEventListenerFunctions.HandleSettingSelect,
    },
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option1',
    },
    text('Option 1'),
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option2',
    },
    text('Option 2'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemSelectVirtualDom shows modification indicator when item is modified', () => {
  const item: SettingItem = {
    heading: 'Modified Item',
    description: 'This item is modified',
    id: 'modified-id',
    type: 1,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
    modified: true,
  }

  const result = getItemSelectVirtualDom(item)

  expect(result).toHaveLength(12)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItem,
    childCount: 2,
    role: 'group',
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.ModifiedIndicator,
    childCount: 0,
  })
  expect(result[2]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItemRight,
    childCount: 3,
  })
})

test('getItemSelectVirtualDom handles empty strings', () => {
  const item: SettingItem = {
    heading: '',
    description: '',
    id: 'empty-id',
    type: 1,
    value: '',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom: readonly VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text(''),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text(''),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 2,
      name: 'empty-id',
      onChange: DomEventListenerFunctions.HandleSettingSelect,
    },
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option1',
    },
    text('Option 1'),
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option2',
    },
    text('Option 2'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemSelectVirtualDom handles special characters in heading and description', () => {
  const item: SettingItem = {
    heading: 'Special & Characters < > " \'',
    description: 'Description with & < > " \' characters',
    id: 'special-id',
    type: 1,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom: readonly VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Special & Characters < > " \''),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Description with & < > " \' characters'),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 2,
      name: 'special-id',
      onChange: DomEventListenerFunctions.HandleSettingSelect,
    },
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option1',
    },
    text('Option 1'),
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option2',
    },
    text('Option 2'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemSelectVirtualDom handles long text', () => {
  const longText = 'A'.repeat(1000)
  const item: SettingItem = {
    heading: longText,
    description: longText,
    id: 'long-id',
    type: 1,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom: readonly VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text(longText),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text(longText),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 2,
      name: 'long-id',
      onChange: DomEventListenerFunctions.HandleSettingSelect,
    },
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option1',
    },
    text('Option 1'),
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option2',
    },
    text('Option 2'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemSelectVirtualDom handles items without options', () => {
  const item: SettingItem = {
    heading: 'No Options',
    description: 'Item without options',
    id: 'no-options-id',
    type: 1,
    value: '',
    category: 'test',
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom: readonly VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('No Options'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Item without options'),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 0,
      name: 'no-options-id',
      onChange: DomEventListenerFunctions.HandleSettingSelect,
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemSelectVirtualDom handles items with empty options array', () => {
  const item: SettingItem = {
    heading: 'Empty Options',
    description: 'Item with empty options array',
    id: 'empty-options-id',
    type: 1,
    value: '',
    category: 'test',
    options: [],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom: readonly VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Empty Options'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Item with empty options array'),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 0,
      name: 'empty-options-id',
      onChange: DomEventListenerFunctions.HandleSettingSelect,
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemSelectVirtualDom maintains consistent structure regardless of content', () => {
  const items: SettingItem[] = [
    {
      heading: 'Item 1',
      description: 'Description 1',
      id: 'item-1',
      type: 1,
      value: 'option1',
      category: 'test',
      options: [{ id: 'option1', label: 'Option 1' }],
    },
    {
      heading: 'Item 2',
      description: 'Description 2',
      id: 'item-2',
      type: 1,
      value: 'option2',
      category: 'test',
      options: [{ id: 'option2', label: 'Option 2' }],
    },
  ]

  items.forEach((item) => {
    const result = getItemSelectVirtualDom(item)

    expect(result).toHaveLength(9)
    expect(result[0]).toEqual({
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: 'group',
    })
    expect(result[1]).toEqual({
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 3,
    })
  })
})

test('getItemSelectVirtualDom handles different item types', () => {
  const item: SettingItem = {
    heading: 'Test Item',
    description: 'Test Description',
    id: 'test-id',
    type: 1,
    value: 'option1',
    category: 'test',
    options: [{ id: 'option1', label: 'Option 1' }],
  }

  const result = getItemSelectVirtualDom(item)

  expect(result).toHaveLength(9)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItem,
    childCount: 1,
    role: 'group',
  })
})
