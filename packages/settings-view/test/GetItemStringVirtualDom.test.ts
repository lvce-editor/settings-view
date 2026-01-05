import { test, expect } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getInputId } from '../src/parts/GetInputId/GetInputId.ts'
import { getItemStringVirtualDom } from '../src/parts/GetItemStringVirtualDom/GetItemStringVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

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
  const domId = getInputId(item.id)

  expect(result).toEqual([
    {
      childCount: 3,
      className: ClassNames.SettingsItem,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.SettingsItemHeading,
      type: VirtualDomElements.H3,
    },
    text('Test Setting'),
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text('Test description'),
    {
      childCount: 0,
      className: ClassNames.InputBox,
      id: domId,
      inputType: 'text',
      name: 'test',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.stringValue(),
      type: VirtualDomElements.Input,
    },
  ])
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
  const domId = getInputId(item.id)

  expect(result).toEqual([
    {
      childCount: 4,
      className: ClassNames.SettingsItem,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.SettingsItemHeading,
      type: VirtualDomElements.H3,
    },
    text('Test Setting'),
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text('Test description'),
    {
      childCount: 0,
      className: `${ClassNames.InputBox} ${ClassNames.InputBoxError}`,
      id: domId,
      inputType: 'text',
      name: 'test',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.stringValue(),
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: ClassNames.ErrorMessage,
      type: VirtualDomElements.Div,
    },
    text('Invalid value provided'),
  ])
})
