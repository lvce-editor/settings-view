import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import { getItemStringVirtualDom } from '../src/parts/GetItemStringVirtualDom/GetItemStringVirtualDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemStringVirtualDom returns correct DOM structure for normal item', () => {
  const item: SettingItem = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 0,
    value: 'test value',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

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
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Test Description'),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'text',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      name: 'testItem',
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemStringVirtualDom handles empty strings', () => {
  const item: SettingItem = {
    id: 'emptyItem',
    heading: '',
    description: '',
    type: 0,
    value: '',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

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
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text(''),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'text',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      name: 'emptyItem',
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemStringVirtualDom handles special characters in heading and description', () => {
  const item: SettingItem = {
    id: 'specialCharsItem',
    heading: 'Heading with & < > " \' chars',
    description: 'Description with & < > " \' chars',
    type: 0,
    value: 'special value',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

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
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Description with & < > " \' chars'),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'text',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      name: 'specialCharsItem',
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemStringVirtualDom handles long text', () => {
  const item: SettingItem = {
    id: 'longTextItem',
    heading: 'This is a very long heading that might wrap to multiple lines in the UI',
    description: 'This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface',
    type: 0,
    value: 'long value',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

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
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface'),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'text',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      name: 'longTextItem',
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemStringVirtualDom maintains consistent structure regardless of content', () => {
  const items: SettingItem[] = [
    {
      id: 'item1',
      heading: 'Item 1',
      description: 'Description 1',
      type: 0,
      value: 'value1',
      category: 'test',
    },
    {
      id: 'item2',
      heading: 'Item 2',
      description: 'Description 2',
      type: 0,
      value: 'value2',
      category: 'test',
    },
    {
      id: 'item3',
      heading: 'Item 3',
      description: 'Description 3',
      type: 0,
      value: 'value3',
      category: 'test',
    },
  ]

  for (const item of items) {
    const result = getItemStringVirtualDom(item)

    expect(result).toHaveLength(6)
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
      type: VirtualDomElements.P,
      childCount: 1,
    })
    expect(result[4]).toEqual(text(item.description))
    expect(result[5]).toEqual({
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'text',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      name: item.id,
    })
  }
})

test('getItemStringVirtualDom handles different item types', () => {
  const item: SettingItem = {
    id: 'differentTypeItem',
    heading: 'Different Type Item',
    description: 'This item has a different type value',
    type: 42,
    value: 'different value',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

  expect(result).toHaveLength(6)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'SettingsItem',
    childCount: 3,
  })
  expect(result[2]).toEqual(text('Different Type Item'))
  expect(result[4]).toEqual(text('This item has a different type value'))
  expect(result[5]).toEqual({
    type: VirtualDomElements.Input,
    className: 'InputBox',
    inputType: 'text',
    placeholder: SettingStrings.numberValue(),
    childCount: 0,
    name: 'differentTypeItem',
  })
})
