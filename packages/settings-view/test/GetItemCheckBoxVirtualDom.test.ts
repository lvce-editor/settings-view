import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import { getInputId } from '../src/parts/GetInputId/GetInputId.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
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
  const domId = getInputId(item.id)

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
      childCount: 6,
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
      id: domId,
      name: 'testItem',
      onChange: 'handleSettingChecked',
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: domId,
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
  const domId = getInputId(item.id)

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
      childCount: 6,
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
      id: domId,
      name: 'emptyItem',
      onChange: 'handleSettingChecked',
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: domId,
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
  const domId = getInputId(item.id)

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
      childCount: 6,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Heading with & < > " \' chars'),
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
      id: domId,
      name: 'specialCharsItem',
      onChange: 'handleSettingChecked',
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: domId,
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
    value: 'true',
    category: 'test',
  }

  const result = getItemCheckBoxVirtualDom(item)
  const domId = getInputId(item.id)

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
      childCount: 6,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('This is a very long heading that might wrap to multiple lines in the UI'),
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
      id: domId,
      name: 'longTextItem',
      onChange: 'handleSettingChecked',
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: domId,
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
    const domId = getInputId(item.id)

    expect(result).toHaveLength(8)
    expect(result[0]).toEqual({
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2,
      role: 'group',
    })
    expect(result[3]).toEqual(text(item.heading))
    expect(result[5]).toEqual({
      type: VirtualDomElements.Input,
      className: ClassNames.CheckBox,
      inputType: 'checkbox',
      childCount: 0,
      id: domId,
      name: item.id,
      onChange: 'handleSettingChecked',
    })
    expect(result[7]).toEqual(text(item.description))
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
  const domId = getInputId(item.id)

  expect(result).toHaveLength(8)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItem,
    childCount: 2,
    role: 'group',
  })
  expect(result[3]).toEqual(text('Different Type Item'))
  expect(result[7]).toEqual(text('This item has a different type value'))
  expect(result[5]).toEqual({
    type: VirtualDomElements.Input,
    className: ClassNames.CheckBox,
    inputType: 'checkbox',
    childCount: 0,
    id: domId,
    name: 'differentTypeItem',
    onChange: 'handleSettingChecked',
  })
})

test('getItemCheckBoxVirtualDom shows modification indicator when item is modified', () => {
  const item: SettingItem = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 2,
    value: 'true',
    category: 'test',
    modified: true,
  }

  const result = getItemCheckBoxVirtualDom(item)

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
    childCount: 6,
  })
})
