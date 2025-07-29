import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItem } from '../src/parts/SettingItem/SettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
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
      className: ClassNames.SettingsItem,
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
      type: VirtualDomElements.Input,
      className: ClassNames.InputBox,
      inputType: 'text',
      placeholder: SettingStrings.stringValue(),
      childCount: 0,
      name: 'testItem',
      onInput: 'handleSettingInput',
    },
  ]

  expect(result).toEqual(expectedDom)
})
