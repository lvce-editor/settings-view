import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
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
      className: 'SettingsItem',
      childCount: 3,
      role: 'group',
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
      className: 'Select',
      childCount: 2,
      name: 'testItem',
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
