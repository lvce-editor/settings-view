import { test, expect } from '@jest/globals'
import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getItemNumberVirtualDom } from '../src/parts/GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemNumberVirtualDom returns expected DOM structure for normal item', () => {
  const item: SettingItem = {
    heading: 'Test Heading',
    description: 'Test Description',
    id: 'test-id',
    type: 5,
    value: 42,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

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
      type: VirtualDomElements.Label,
      htmlFor: 'test-id',
      childCount: 1,
      className: 'Label',
    },
    text('Test Description'),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: 'test-id',
      name: 'test-id',
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom shows modification indicator when item is modified', () => {
  const item: SettingItem = {
    heading: 'Modified Item',
    description: 'This item is modified',
    id: 'modified-id',
    type: 5,
    value: 100,
    category: 'test',
    modified: true,
  }

  const result = getItemNumberVirtualDom(item)

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

test('getItemNumberVirtualDom handles empty strings', () => {
  const item: SettingItem = {
    heading: '',
    description: '',
    id: 'empty-id',
    type: 5,
    value: 0,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

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
      type: VirtualDomElements.Label,
      htmlFor: 'empty-id',
      childCount: 1,
      className: 'Label',
    },
    text(''),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: 'empty-id',
      name: 'empty-id',
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles special characters in heading and description', () => {
  const item: SettingItem = {
    heading: 'Special & Characters < > " \'',
    description: 'Description with & < > " \' characters',
    id: 'special-id',
    type: 5,
    value: 123,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

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
      type: VirtualDomElements.Label,
      htmlFor: 'special-id',
      childCount: 1,
      className: 'Label',
    },
    text('Description with & < > " \' characters'),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: 'special-id',
      name: 'special-id',
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles long text', () => {
  const longText = 'A'.repeat(1000)
  const item: SettingItem = {
    heading: longText,
    description: longText,
    id: 'long-id',
    type: 5,
    value: 999,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

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
      type: VirtualDomElements.Label,
      htmlFor: 'long-id',
      childCount: 1,
      className: 'Label',
    },
    text(longText),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: 'long-id',
      name: 'long-id',
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles numeric values in item', () => {
  const item: SettingItem = {
    heading: 'Numeric Item',
    description: 'Item with numeric value',
    id: 'numeric-id',
    type: 5,
    value: 42.5,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

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
    text('Numeric Item'),
    {
      type: VirtualDomElements.Label,
      htmlFor: 'numeric-id',
      childCount: 1,
      className: 'Label',
    },
    text('Item with numeric value'),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: 'numeric-id',
      name: 'numeric-id',
      onInput: DomEventListenerFunctions.HandleSettingInput,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom maintains consistent structure regardless of content', () => {
  const items: SettingItem[] = [
    {
      heading: 'Item 1',
      description: 'Description 1',
      id: 'item-1',
      type: 5,
      value: 1,
      category: 'test',
    },
    {
      heading: 'Item 2',
      description: 'Description 2',
      id: 'item-2',
      type: 5,
      value: 2,
      category: 'test',
    },
  ]

  items.forEach((item) => {
    const virtualDom = getItemNumberVirtualDom(item)

    expect(virtualDom).toHaveLength(7)
    expect(virtualDom[0]).toEqual({
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 1,
      role: 'group',
    })
    expect(virtualDom[1]).toEqual({
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItemRight,
      childCount: 3,
    })
  })
})
