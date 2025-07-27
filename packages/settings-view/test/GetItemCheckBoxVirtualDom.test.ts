import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import { getItemCheckBoxVirtualDom } from '../src/parts/GetItemCheckBoxVirtualDom/GetItemCheckBoxVirtualDom.ts'

test('getItemCheckBoxVirtualDom returns correct DOM structure for normal item', () => {
  const item: SettingItem = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 2,
    value: 'true',
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Test Heading'),
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItemCheckBox',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: 'CheckBox',
      inputType: 'checkbox',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
    },
    text('Test Description'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom handles empty strings', () => {
  const item: SettingItem = {
    id: 'emptyItem',
    heading: '',
    description: '',
    type: 2,
    value: 'false',
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text(''),
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItemCheckBox',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: 'CheckBox',
      inputType: 'checkbox',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
    },
    text(''),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom handles special characters in heading and description', () => {
  const item: SettingItem = {
    id: 'specialCharsItem',
    heading: 'Heading with & < > " \' chars',
    description: 'Description with & < > " \' chars',
    type: 2,
    value: 'true',
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Heading with & < > " \' chars'),
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItemCheckBox',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: 'CheckBox',
      inputType: 'checkbox',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
    },
    text('Description with & < > " \' chars'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom handles long text', () => {
  const item: SettingItem = {
    id: 'longTextItem',
    heading: 'This is a very long heading that might wrap to multiple lines in the UI',
    description: 'This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface',
    type: 2,
    value: 'false',
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('This is a very long heading that might wrap to multiple lines in the UI'),
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItemCheckBox',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: 'CheckBox',
      inputType: 'checkbox',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
    },
    text('This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom maintains consistent structure regardless of content', () => {
  const items: SettingItem[] = [
    {
      id: 'item1',
      heading: 'Item 1',
      description: 'Description 1',
      type: 2,
      value: 'true',
      category: 'test',
    },
    {
      id: 'item2',
      heading: 'Item 2',
      description: 'Description 2',
      type: 2,
      value: 'false',
      category: 'test',
    },
    {
      id: 'item3',
      heading: 'Item 3',
      description: 'Description 3',
      type: 2,
      value: 'true',
      category: 'test',
    },
  ]

  for (const item of items) {
    const result = getItemCheckBoxVirtualDom(item)

    expect(result).toHaveLength(7)
    expect(result[0]).toEqual({
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    })
    expect(result[1]).toEqual({
      type: VirtualDomElements.H3,
      childCount: 1,
    })
    expect(result[2]).toEqual(text(item.heading))
    expect(result[3]).toEqual({
      type: VirtualDomElements.Div,
      className: 'SettingsItemCheckBox',
      childCount: 2,
    })
    expect(result[4]).toEqual({
      type: VirtualDomElements.Input,
      className: 'CheckBox',
      inputType: 'checkbox',
      childCount: 0,
    })
    expect(result[5]).toEqual({
      type: VirtualDomElements.Label,
      childCount: 1,
    })
    expect(result[6]).toEqual(text(item.description))
  }
})

test('getItemCheckBoxVirtualDom handles different item types', () => {
  const item: SettingItem = {
    id: 'differentTypeItem',
    heading: 'Different Type Item',
    description: 'This item has a different type value',
    type: 42,
    value: 'true',
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

  expect(result).toHaveLength(7)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItem',
    childCount: 3,
  })
  expect(result[2]).toEqual(text('Different Type Item'))
  expect(result[4]).toEqual({
    type: VirtualDomElements.Input,
    className: 'CheckBox',
    inputType: 'checkbox',
    childCount: 0,
  })
  expect(result[6]).toEqual(text('This item has a different type value'))
})
