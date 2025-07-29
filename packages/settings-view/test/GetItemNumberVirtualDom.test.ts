import { expect, test } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getItemNumberVirtualDom } from '../src/parts/GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemNumberVirtualDom returns expected DOM structure for normal item', () => {
  const item = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 1,
    value: '42',
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
      role: 'group',
      'data-modified': false,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Test Heading'),
    {
      type: VirtualDomElements.Label,
      htmlFor: 'testItem',
      childCount: 1,
      className: 'Label',
    },
    text('Test Description'),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: 'testItem',
      name: 'testItem',
      onInput: 'handleSettingInput',
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom returns expected DOM structure for modified item', () => {
  const item = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 1,
    value: '42',
    category: 'test',
    modified: true,
  }

  const virtualDom = getItemNumberVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 4,
      role: 'group',
      'data-modified': true,
    },
    {
      type: VirtualDomElements.Div,
      className: 'ModifiedIndicator',
      childCount: 0,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Test Heading'),
    {
      type: VirtualDomElements.Label,
      htmlFor: 'testItem',
      childCount: 1,
      className: 'Label',
    },
    text('Test Description'),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'number',
      placeholder: SettingStrings.numberValue(),
      childCount: 0,
      id: 'testItem',
      name: 'testItem',
      onInput: 'handleSettingInput',
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})
