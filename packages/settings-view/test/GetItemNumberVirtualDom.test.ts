import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import { getInputId } from '../src/parts/GetInputId/GetInputId.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemNumberVirtualDom } from '../src/parts/GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemNumberVirtualDom returns expected DOM structure for normal item', () => {
  const item: SettingItem = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 1,
    value: 42,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)
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
      type: VirtualDomElements.Label,
      htmlFor: domId,
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
      id: domId,
      name: 'testItem',
      onInput: 'handleSettingInput',
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom shows modification indicator when item is modified', () => {
  const item: SettingItem = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 1,
    value: 42,
    category: 'test',
    modified: true,
  }

  const result = getItemNumberVirtualDom(item)

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

test('getItemNumberVirtualDom handles empty strings', () => {
  const item: SettingItem = {
    id: 'emptyItem',
    heading: '',
    description: '',
    type: 1,
    value: 0,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)
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
      type: VirtualDomElements.Label,
      htmlFor: domId,
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
      id: domId,
      name: 'emptyItem',
      onInput: 'handleSettingInput',
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles special characters in heading and description', () => {
  const item: SettingItem = {
    id: 'specialCharsItem',
    heading: 'Heading with & < > " \' chars',
    description: 'Description with & < > " \' chars',
    type: 1,
    value: 42,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)
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
      type: VirtualDomElements.Label,
      htmlFor: domId,
      childCount: 1,
      className: 'Label',
    },
    text('Description with & < > " \' chars'),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: domId,
      name: 'specialCharsItem',
      onInput: 'handleSettingInput',
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles long text', () => {
  const item: SettingItem = {
    id: 'longTextItem',
    heading: 'This is a very long heading that might wrap to multiple lines in the UI',
    description: 'This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface',
    type: 1,
    value: 42,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)
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
      type: VirtualDomElements.Label,
      htmlFor: domId,
      childCount: 1,
      className: 'Label',
    },
    text('This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface'),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: domId,
      name: 'longTextItem',
      onInput: 'handleSettingInput',
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles numeric values in item', () => {
  const item: SettingItem = {
    id: 'numericValueItem',
    heading: 'Numeric Value Item',
    description: 'This item has a numeric value',
    type: 1,
    value: 123.45,
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)
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
    text('Numeric Value Item'),
    {
      type: VirtualDomElements.Label,
      htmlFor: domId,
      childCount: 1,
      className: 'Label',
    },
    text('This item has a numeric value'),
    {
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: domId,
      name: 'numericValueItem',
      onInput: 'handleSettingInput',
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom maintains consistent structure regardless of content', () => {
  const items: SettingItem[] = [
    {
      id: 'item1',
      heading: 'Item 1',
      description: 'Description 1',
      type: 1,
      value: 1,
      category: 'test',
    },
    {
      id: 'item2',
      heading: 'Item 2',
      description: 'Description 2',
      type: 1,
      value: 2,
      category: 'test',
    },
    {
      id: 'item3',
      heading: 'Item 3',
      description: 'Description 3',
      type: 1,
      value: 3,
      category: 'test',
    },
  ]

  for (const item of items) {
    const virtualDom = getItemNumberVirtualDom(item)
    const domId = getInputId(item.id)

    expect(virtualDom).toHaveLength(7)
    expect(virtualDom[0]).toEqual({
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItem,
      childCount: 2,
      role: 'group',
    })
    expect(virtualDom[3]).toEqual(text(item.heading))
    expect(virtualDom[5]).toEqual(text(item.description))
    expect(virtualDom[6]).toEqual({
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: domId,
      name: item.id,
      onInput: 'handleSettingInput',
    })
  }
})
