import { test, expect } from '@jest/globals'
import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemStringVirtualDom } from '../src/parts/GetItemStringVirtualDom/GetItemStringVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('getItemStringVirtualDom returns virtual DOM without error when no validation', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Setting',
    id: 'test',
    modified: false,
    type: SettingItemType.String,
    value: 'test value',
  }
  const result = getItemStringVirtualDom(item)

  expect(result).toHaveLength(6) // 6 elements: div, h3, text, p, text, input
  expect(result[0]).toEqual({
    childCount: 3,
    className: ClassNames.SettingsItem,
    role: AriaRoles.Group,
    type: VirtualDomElements.Div,
  })
})

test('getItemStringVirtualDom returns virtual DOM with error when validation fails', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test description',
    errorMessage: 'Invalid value provided',
    hasError: true,
    heading: 'Test Setting',
    id: 'test',
    modified: false,
    type: SettingItemType.String,
    value: 'invalid value',
  }
  const result = getItemStringVirtualDom(item)

  expect(result).toHaveLength(8) // 6 base elements + 2 error message elements
  expect(result[0]).toEqual({
    childCount: 4, // Updated to include error message
    className: ClassNames.SettingsItem,
    role: AriaRoles.Group,
    type: VirtualDomElements.Div,
  })
  // Check that the input has error styling
  expect(result[5]).toEqual({
    childCount: 0,
    className: `${ClassNames.InputBox} ${ClassNames.InputBoxError}`,
    id: 'test',
    inputType: 'text',
    name: 'test',
    onInput: 'handleSettingInput',
    placeholder: 'string value',
    type: VirtualDomElements.Input,
  })
  // Check that error message is present
  expect(result[6]).toEqual({
    childCount: 1,
    className: ClassNames.ErrorMessage,
    type: VirtualDomElements.Div,
  })
})
