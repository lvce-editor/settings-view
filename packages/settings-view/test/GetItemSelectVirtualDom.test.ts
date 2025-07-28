import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemSelectVirtualDom } from '../src/parts/GetItemSelectVirtualDom/GetItemSelectVirtualDom.ts'

test('getItemSelectVirtualDom returns correct DOM structure for normal item', () => {
  const item: SettingItem = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 3,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 9,
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
      name: 'testItem',
      onChange: 'handleSettingSelect',
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
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 3,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
    ],
    modified: true,
  }

  const result = getItemSelectVirtualDom(item)

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
    childCount: 7,
  })
})

test('getItemSelectVirtualDom handles empty strings', () => {
  const item: SettingItem = {
    id: 'emptyItem',
    heading: '',
    description: '',
    type: 3,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
    ],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 7,
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
      childCount: 1,
      name: 'emptyItem',
      onChange: 'handleSettingSelect',
    },
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option1',
    },
    text('Option 1'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemSelectVirtualDom handles special characters in heading and description', () => {
  const item: SettingItem = {
    id: 'specialCharsItem',
    heading: 'Heading with & < > " \' chars',
    description: 'Description with & < > " \' chars',
    type: 3,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 9,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Heading with & < > " \' chars'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Description with & < > " \' chars'),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 2,
      name: 'specialCharsItem',
      onChange: 'handleSettingSelect',
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
  const item: SettingItem = {
    id: 'longTextItem',
    heading: 'This is a very long heading that might wrap to multiple lines in the UI',
    description: 'This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface',
    type: 3,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 9,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('This is a very long heading that might wrap to multiple lines in the UI'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface'),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 2,
      name: 'longTextItem',
      onChange: 'handleSettingSelect',
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
    id: 'noOptionsItem',
    heading: 'No Options Item',
    description: 'This item has no options',
    type: 3,
    value: '',
    category: 'test',
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 5,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('No Options Item'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('This item has no options'),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 0,
      name: 'noOptionsItem',
      onChange: 'handleSettingSelect',
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemSelectVirtualDom handles items with empty options array', () => {
  const item: SettingItem = {
    id: 'emptyOptionsItem',
    heading: 'Empty Options Item',
    description: 'This item has an empty options array',
    type: 3,
    value: '',
    category: 'test',
    options: [],
  }

  const result = getItemSelectVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2,
      role: 'group',
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 5,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Empty Options Item'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('This item has an empty options array'),
    {
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: 0,
      name: 'emptyOptionsItem',
      onChange: 'handleSettingSelect',
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemSelectVirtualDom maintains consistent structure regardless of content', () => {
  const items: SettingItem[] = [
    {
      id: 'item1',
      heading: 'Item 1',
      description: 'Description 1',
      type: 3,
      value: 'option1',
      category: 'test',
      options: [
        { id: 'option1', label: 'Option 1' },
      ],
    },
    {
      id: 'item2',
      heading: 'Item 2',
      description: 'Description 2',
      type: 3,
      value: 'option2',
      category: 'test',
      options: [
        { id: 'option1', label: 'Option 1' },
        { id: 'option2', label: 'Option 2' },
      ],
    },
    {
      id: 'item3',
      heading: 'Item 3',
      description: 'Description 3',
      type: 3,
      value: 'option3',
      category: 'test',
      options: [
        { id: 'option1', label: 'Option 1' },
        { id: 'option2', label: 'Option 2' },
        { id: 'option3', label: 'Option 3' },
      ],
    },
  ]

  for (const item of items) {
    const result = getItemSelectVirtualDom(item)
    const expectedLength = 7 + (item.options?.length || 0) * 2

    expect(result).toHaveLength(expectedLength)
    expect(result[0]).toEqual({
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2,
      role: 'group',
    })
    expect(result[3]).toEqual(text(item.heading))
    expect(result[5]).toEqual(text(item.description))
    expect(result[6]).toEqual({
      type: VirtualDomElements.Select,
      className: ClassNames.Select,
      childCount: item.options?.length || 0,
      name: item.id,
      onChange: 'handleSettingSelect',
    })
  }
})

test('getItemSelectVirtualDom handles different item types', () => {
  const item: SettingItem = {
    id: 'differentTypeItem',
    heading: 'Different Type Item',
    description: 'This item has a different type value',
    type: 42,
    value: 'option1',
    category: 'test',
    options: [
      { id: 'option1', label: 'Option 1' },
    ],
  }

  const result = getItemSelectVirtualDom(item)

  expect(result).toHaveLength(9)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItem,
    childCount: 2,
    role: 'group',
  })
  expect(result[3]).toEqual(text('Different Type Item'))
  expect(result[5]).toEqual(text('This item has a different type value'))
  expect(result[6]).toEqual({
    type: VirtualDomElements.Select,
    className: ClassNames.Select,
    childCount: 1,
    name: 'differentTypeItem',
    onChange: 'handleSettingSelect',
  })
})
