import { test, expect } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import { getInputId } from '../src/parts/GetInputId/GetInputId.ts'
import { getItemCheckBoxVirtualDom } from '../src/parts/GetItemCheckBoxVirtualDom/GetItemCheckBoxVirtualDom.ts'

test('getItemCheckBoxVirtualDom returns correct DOM structure for normal item', () => {
  const item: DisplaySettingItem = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 2,
    value: 'true',
    category: 'test',
    modified: false,
    errorMessage: '',
    hasError: false,
  }

  const result = getItemCheckBoxVirtualDom(item)
  const domId = getInputId(item.id)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 2,
      role: AriaRoles.Group,
      'data-modified': false,
    },
    {
      type: VirtualDomElements.H3,
      className: ClassNames.SettingsItemHeading,
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
      id: domId,
      name: 'testItem',
      onChange: 'handleSettingChecked',
    },
    {
      type: VirtualDomElements.Label,
      childCount: 1,
      htmlFor: domId,
      className: ClassNames.Label,
    },
    text('Test Description'),
  ]

  expect(result).toEqual(expectedDom)
})
