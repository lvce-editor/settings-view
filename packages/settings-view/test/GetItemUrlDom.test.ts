import { test, expect } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getInputId } from '../src/parts/GetInputId/GetInputId.ts'
import { getItemUrlVirtualDom } from '../src/parts/GetItemUrlDom/GetItemUrlDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemUrlVirtualDom returns virtual DOM without error when no validation', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Setting',
    id: 'test',
    modified: false,
    type: SettingItemType.Url,
    value: 'https://example.com',
  }
  const result = getItemUrlVirtualDom(item)
  const domId = getInputId(item.id)

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
      inputType: 'url',
      name: 'test',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.numberValue(),
      type: VirtualDomElements.Input,
    },
  ])
})

test('getItemUrlVirtualDom returns virtual DOM with error when validation fails', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test description',
    errorMessage: 'Invalid URL provided',
    hasError: true,
    heading: 'Test Setting',
    id: 'test',
    modified: false,
    type: SettingItemType.Url,
    value: 'invalid url',
  }
  const result = getItemUrlVirtualDom(item)
  const domId = getInputId(item.id)

  expect(result).toEqual([
    {
      childCount: 4,
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
      inputType: 'url',
      name: 'test',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.numberValue(),
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: ClassNames.ErrorMessage,
      type: VirtualDomElements.Div,
    },
    text('Invalid URL provided'),
  ])
})

test('getItemUrlVirtualDom handles modified state', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Setting',
    id: 'test',
    modified: true,
    type: SettingItemType.Url,
    value: 'https://example.com',
  }
  const result = getItemUrlVirtualDom(item)
  const domId = getInputId(item.id)

  expect(result).toEqual([
    {
      childCount: 3,
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
      inputType: 'url',
      name: 'test',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.numberValue(),
      type: VirtualDomElements.Input,
    },
  ])
})

test('getItemUrlVirtualDom uses correct input type', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Setting',
    id: 'test',
    modified: false,
    type: SettingItemType.Url,
    value: 'https://example.com',
  }
  const result = getItemUrlVirtualDom(item)
  const domId = getInputId(item.id)

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
      inputType: 'url',
      name: 'test',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.numberValue(),
      type: VirtualDomElements.Input,
    },
  ])
})

test('getItemUrlVirtualDom handles id with dots', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Setting',
    id: 'test.setting.url',
    modified: false,
    type: SettingItemType.Url,
    value: 'https://example.com',
  }
  const result = getItemUrlVirtualDom(item)
  const domId = getInputId(item.id)

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
      inputType: 'url',
      name: 'test.setting.url',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.numberValue(),
      type: VirtualDomElements.Input,
    },
  ])
})

test('getItemUrlVirtualDom returns correct structure with different properties', () => {
  const item: DisplaySettingItem = {
    category: 'editor',
    description: 'Homepage URL',
    errorMessage: '',
    hasError: false,
    heading: 'Homepage',
    id: 'homepage',
    modified: true,
    type: SettingItemType.Url,
    value: 'https://example.com',
  }
  const result = getItemUrlVirtualDom(item)
  const domId = getInputId(item.id)

  expect(result).toEqual([
    {
      childCount: 3,
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
    text('Homepage'),
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text('Homepage URL'),
    {
      childCount: 0,
      className: ClassNames.InputBox,
      id: domId,
      inputType: 'url',
      name: 'homepage',
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.numberValue(),
      type: VirtualDomElements.Input,
    },
  ])
})
