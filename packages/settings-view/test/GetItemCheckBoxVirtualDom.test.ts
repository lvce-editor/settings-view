import { test, expect } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getInputId } from '../src/parts/GetInputId/GetInputId.ts'
import { getItemCheckBoxVirtualDom } from '../src/parts/GetItemCheckBoxVirtualDom/GetItemCheckBoxVirtualDom.ts'

test('getItemCheckBoxVirtualDom returns correct DOM structure for normal item', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test Description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Heading',
    id: 'testItem',
    modified: false,
    type: 2,
    value: 'true',
  }

  const result = getItemCheckBoxVirtualDom(item)
  const domId = getInputId(item.id)

  const expectedDom = [
    {
      childCount: 2,
      className: 'SettingsItem',
      'data-modified': false,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.SettingsItemHeading,
      type: VirtualDomElements.H3,
    },
    text('Test Heading'),
    {
      childCount: 2,
      className: 'SettingsItemCheckBox',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: 'CheckBox',
      id: domId,
      inputType: 'checkbox',
      name: 'testItem',
      onChange: 'handleSettingChecked',
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text('Test Description'),
  ]

  expect(result).toEqual(expectedDom)
})
