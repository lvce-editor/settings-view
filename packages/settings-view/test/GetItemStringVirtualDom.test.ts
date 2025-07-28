import { test, expect } from '@jest/globals'
import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getItemStringVirtualDom } from '../src/parts/GetItemStringVirtualDom/GetItemStringVirtualDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemStringVirtualDom returns correct DOM structure for normal item', () => {
  const item: SettingItem = {
    heading: 'Test Heading',
    description: 'Test Description',
    id: 'test-id',
    type: 2,
    value: 'test value',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

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
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'text',
      placeholder: SettingStrings.stringValue(),
      childCount: 0,
      name: 'test-id',
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemStringVirtualDom handles empty strings', () => {
  const item: SettingItem = {
    heading: '',
    description: '',
    id: 'empty-id',
    type: 2,
    value: '',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

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
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'text',
      placeholder: SettingStrings.stringValue(),
      childCount: 0,
      name: 'empty-id',
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemStringVirtualDom handles special characters in heading and description', () => {
  const item: SettingItem = {
    heading: 'Special & Characters < > " \'',
    description: 'Description with & < > " \' characters',
    id: 'special-id',
    type: 2,
    value: 'special value',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

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
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'text',
      placeholder: SettingStrings.stringValue(),
      childCount: 0,
      name: 'special-id',
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemStringVirtualDom handles long text', () => {
  const longText = 'A'.repeat(1000)
  const item: SettingItem = {
    heading: longText,
    description: longText,
    id: 'long-id',
    type: 2,
    value: 'long value',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

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
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'text',
      placeholder: SettingStrings.stringValue(),
      childCount: 0,
      name: 'long-id',
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemStringVirtualDom maintains consistent structure regardless of content', () => {
  const items: SettingItem[] = [
    {
      heading: 'Item 1',
      description: 'Description 1',
      id: 'item-1',
      type: 2,
      value: 'value1',
      category: 'test',
    },
    {
      heading: 'Item 2',
      description: 'Description 2',
      id: 'item-2',
      type: 2,
      value: 'value2',
      category: 'test',
    },
  ]

  items.forEach((item) => {
    const result = getItemStringVirtualDom(item)

    expect(result).toHaveLength(7)
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

test('getItemStringVirtualDom handles different item types', () => {
  const item: SettingItem = {
    heading: 'Test Item',
    description: 'Test Description',
    id: 'test-id',
    type: 2,
    value: 'test value',
    category: 'test',
  }

  const result = getItemStringVirtualDom(item)

  expect(result).toHaveLength(7)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItem,
    childCount: 1,
    role: 'group',
  })
})

test('getItemStringVirtualDom shows modification indicator when item is modified', () => {
  const item: SettingItem = {
    heading: 'Modified Item',
    description: 'This item is modified',
    id: 'modified-id',
    type: 2,
    value: 'modified value',
    category: 'test',
    modified: true,
  }

  const result = getItemStringVirtualDom(item)

  expect(result).toHaveLength(8)
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
