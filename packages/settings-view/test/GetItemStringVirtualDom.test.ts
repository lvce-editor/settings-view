import { test, expect } from '@jest/globals'
import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemStringVirtualDom } from '../src/parts/GetItemStringVirtualDom/GetItemStringVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('getItemStringVirtualDom returns virtual DOM without error when no validation', () => {
  const item: DisplaySettingItem = {
    id: 'test',
    heading: 'Test Setting',
    description: 'Test description',
    type: SettingItemType.String,
    value: 'test value',
    category: 'test',
    modified: false,
    errorMessage: '',
    hasError: false,
  }
  const result = getItemStringVirtualDom(item)

  expect(result).toHaveLength(6) // 6 elements: div, h3, text, p, text, input
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItem,
    childCount: 3,
    role: AriaRoles.Group,
  })
})

test('getItemStringVirtualDom returns virtual DOM with error when validation fails', () => {
  const item: DisplaySettingItem = {
    id: 'test',
    heading: 'Test Setting',
    description: 'Test description',
    type: SettingItemType.String,
    value: 'invalid value',
    category: 'test',
    modified: false,
    errorMessage: 'Invalid value provided',
    hasError: true,
  }
  const result = getItemStringVirtualDom(item)

  expect(result).toHaveLength(8) // 6 base elements + 2 error message elements
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItem,
    childCount: 4, // Updated to include error message
    role: AriaRoles.Group,
  })
  // Check that the input has error styling
  expect(result[5]).toEqual({
    type: VirtualDomElements.Input,
    className: `${ClassNames.InputBox} ${ClassNames.InputBoxError}`,
    inputType: 'text',
    placeholder: 'string value',
    childCount: 0,
    name: 'test',
    onInput: 'handleSettingInput',
  })
  // Check that error message is present
  expect(result[6]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.ErrorMessage,
    childCount: 1,
  })
})
