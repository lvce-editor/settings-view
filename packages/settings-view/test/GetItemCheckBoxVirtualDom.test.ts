import { test, expect } from '@jest/globals'
import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getItemCheckBoxVirtualDom } from '../src/parts/GetItemCheckBoxVirtualDom/GetItemCheckBoxVirtualDom.ts'

test('getItemCheckBoxVirtualDom returns correct DOM structure for normal item', () => {
  const item: SettingItem = {
    heading: 'Test Heading',
    description: 'Test Description',
    id: 'test-id',
    type: 3,
    value: true,
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

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
      childCount: 2,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Test Heading'),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemCheckBox,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: ClassNames.CheckBox,
      inputType: 'checkbox',
      childCount: 0,
      id: 'test-id',
      name: 'test-id',
      onChange: DomEventListenerFunctions.HandleSettingChecked,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: 'test-id',
    },
    text('Test Description'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom handles empty strings', () => {
  const item: SettingItem = {
    heading: '',
    description: '',
    id: 'empty-id',
    type: 3,
    value: false,
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

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
      childCount: 2,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text(''),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemCheckBox,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: ClassNames.CheckBox,
      inputType: 'checkbox',
      childCount: 0,
      id: 'empty-id',
      name: 'empty-id',
      onChange: DomEventListenerFunctions.HandleSettingChecked,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: 'empty-id',
    },
    text(''),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom handles special characters in heading and description', () => {
  const item: SettingItem = {
    heading: 'Special & Characters < > " \'',
    description: 'Description with & < > " \' characters',
    id: 'special-id',
    type: 3,
    value: true,
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

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
      childCount: 2,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Special & Characters < > " \''),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemCheckBox,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: ClassNames.CheckBox,
      inputType: 'checkbox',
      childCount: 0,
      id: 'special-id',
      name: 'special-id',
      onChange: DomEventListenerFunctions.HandleSettingChecked,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: 'special-id',
    },
    text('Description with & < > " \' characters'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom handles long text', () => {
  const longText = 'A'.repeat(1000)
  const item: SettingItem = {
    heading: longText,
    description: longText,
    id: 'long-id',
    type: 3,
    value: false,
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

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
      childCount: 2,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text(longText),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemCheckBox,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: ClassNames.CheckBox,
      inputType: 'checkbox',
      childCount: 0,
      id: 'long-id',
      name: 'long-id',
      onChange: DomEventListenerFunctions.HandleSettingChecked,
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: 'long-id',
    },
    text(longText),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom maintains consistent structure regardless of content', () => {
  const items: SettingItem[] = [
    {
      heading: 'Item 1',
      description: 'Description 1',
      id: 'item-1',
      type: 3,
      value: true,
      category: 'test',
    },
    {
      heading: 'Item 2',
      description: 'Description 2',
      id: 'item-2',
      type: 3,
      value: false,
      category: 'test',
    },
  ]

  items.forEach((item) => {
    const result = getItemCheckBoxVirtualDom(item)

    expect(result).toHaveLength(8)
    expect(result[0]).toEqual({
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: 'group',
    })
    expect(result[1]).toEqual({
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 2,
    })
  })
})

test('getItemCheckBoxVirtualDom handles different item types', () => {
  const item: SettingItem = {
    heading: 'Test Item',
    description: 'Test Description',
    id: 'test-id',
    type: 3,
    value: true,
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)

  expect(result).toHaveLength(8)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItem,
    childCount: 1,
    role: 'group',
  })
})

test('getItemCheckBoxVirtualDom shows modification indicator when item is modified', () => {
  const item: SettingItem = {
    heading: 'Modified Item',
    description: 'This item is modified',
    id: 'modified-id',
    type: 3,
    value: true,
    category: 'test',
    modified: true,
  }

  const result = getItemCheckBoxVirtualDom(item)

  expect(result).toHaveLength(9)
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
    childCount: 2,
  })
})
