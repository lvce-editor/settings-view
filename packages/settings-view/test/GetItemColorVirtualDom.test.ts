import { test, expect } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemColorVirtualDom } from '../src/parts/GetItemColorVirtualDom/GetItemColorVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemColorVirtualDom returns virtual DOM without error when no validation', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test color description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Color Setting',
    id: 'test.color',
    modified: false,
    type: SettingItemType.Color,
    value: '#ff0000',
  }
  const result = getItemColorVirtualDom(item)
  const domId = 'test\\.color'

  expect(result).toEqual([
    {
      childCount: 3,
      className: ClassNames.SettingsItem,
      'data-modified': false,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.SettingsItemHeading,
      type: VirtualDomElements.H3,
    },
    text('Test Color Setting'),
    {
      childCount: 2,
      className: ClassNames.SettingsItemCheckBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: 'ColorInput',
      id: domId,
      inputType: 'color',
      name: 'test.color',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.colorValue(),
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text('Test color description'),
  ])
})

test('getItemColorVirtualDom returns virtual DOM with error when validation fails', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test color description',
    errorMessage: 'Invalid color value',
    hasError: true,
    heading: 'Test Color Setting',
    id: 'test.color',
    modified: true,
    type: SettingItemType.Color,
    value: 'invalid',
  }
  const result = getItemColorVirtualDom(item)
  const domId = 'test\\.color'

  expect(result).toEqual([
    {
      childCount: 4,
      className: ClassNames.SettingsItem,
      'data-modified': true,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.SettingsItemHeading,
      type: VirtualDomElements.H3,
    },
    text('Test Color Setting'),
    {
      childCount: 2,
      className: ClassNames.SettingsItemCheckBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: `ColorInput ${ClassNames.InputBoxError}`,
      id: domId,
      inputType: 'color',
      name: 'test.color',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.colorValue(),
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text('Test color description'),
    {
      childCount: 1,
      className: ClassNames.ErrorMessage,
      type: VirtualDomElements.Div,
    },
    text('Invalid color value'),
  ])
})
