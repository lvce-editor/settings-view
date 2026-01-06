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
      childCount: 3,
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
      checked: true,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxCheckmark,
      type: VirtualDomElements.Div,
    },
    text('✓'),
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

test('getItemCheckBoxVirtualDom returns correct DOM structure for item with error', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test Description',
    errorMessage: 'Error occurred',
    hasError: true,
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
      childCount: 3,
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
      childCount: 3,
      className: 'SettingsItemCheckBox',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: `${ClassNames.CheckBox} ${ClassNames.InputBoxError}`,
      id: domId,
      inputType: 'checkbox',
      name: 'testItem',
      onChange: 'handleSettingChecked',
      type: VirtualDomElements.Input,
      checked: true,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxCheckmark,
      type: VirtualDomElements.Div,
    },
    text('✓'),
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text('Test Description'),
    {
      childCount: 1,
      className: ClassNames.ErrorMessage,
      type: VirtualDomElements.Div,
    },
    text('Error occurred'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom returns correct DOM structure for modified item', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test Description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Heading',
    id: 'testItem',
    modified: true,
    type: 2,
    value: 'true',
  }

  const result = getItemCheckBoxVirtualDom(item)
  const domId = getInputId(item.id)

  const expectedDom = [
    {
      childCount: 2,
      className: 'SettingsItem',
      'data-modified': true,
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
      childCount: 3,
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
      checked: true,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxCheckmark,
      type: VirtualDomElements.Div,
    },
    text('✓'),
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

test('getItemCheckBoxVirtualDom returns correct DOM structure for item with error and modified', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test Description',
    errorMessage: 'Validation error',
    hasError: true,
    heading: 'Test Heading',
    id: 'testItem',
    modified: true,
    type: 2,
    value: 'true',
  }

  const result = getItemCheckBoxVirtualDom(item)
  const domId = getInputId(item.id)

  const expectedDom = [
    {
      childCount: 3,
      className: 'SettingsItem',
      'data-modified': true,
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
      childCount: 3,
      className: 'SettingsItemCheckBox',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: `${ClassNames.CheckBox} ${ClassNames.InputBoxError}`,
      id: domId,
      inputType: 'checkbox',
      name: 'testItem',
      onChange: 'handleSettingChecked',
      type: VirtualDomElements.Input,
      checked: true,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxCheckmark,
      type: VirtualDomElements.Div,
    },
    text('✓'),
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text('Test Description'),
    {
      childCount: 1,
      className: ClassNames.ErrorMessage,
      type: VirtualDomElements.Div,
    },
    text('Validation error'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom returns correct DOM structure for item with empty description', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: '',
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
      childCount: 3,
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
      checked: true,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxCheckmark,
      type: VirtualDomElements.Div,
    },
    text('✓'),
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text(''),
  ]

  expect(result).toEqual(expectedDom)
})

test('getItemCheckBoxVirtualDom returns correct DOM structure for item with empty heading', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test Description',
    errorMessage: '',
    hasError: false,
    heading: '',
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
    text(''),
    {
      childCount: 3,
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
      checked: true,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxCheckmark,
      type: VirtualDomElements.Div,
    },
    text('✓'),
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

test('getItemCheckBoxVirtualDom returns correct DOM structure for item with hasError true but empty errorMessage', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test Description',
    errorMessage: '',
    hasError: true,
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
      childCount: 3,
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
      childCount: 3,
      className: 'SettingsItemCheckBox',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: `${ClassNames.CheckBox} ${ClassNames.InputBoxError}`,
      id: domId,
      inputType: 'checkbox',
      name: 'testItem',
      onChange: 'handleSettingChecked',
      type: VirtualDomElements.Input,
      checked: true,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxCheckmark,
      type: VirtualDomElements.Div,
    },
    text('✓'),
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

test('getItemCheckBoxVirtualDom returns correct DOM structure for item with different id', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test Description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Heading',
    id: 'different.setting.id',
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
      childCount: 3,
      className: 'SettingsItemCheckBox',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: 'CheckBox',
      id: domId,
      inputType: 'checkbox',
      name: 'different.setting.id',
      onChange: 'handleSettingChecked',
      type: VirtualDomElements.Input,
      checked: true,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxCheckmark,
      type: VirtualDomElements.Div,
    },
    text('✓'),
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

test('getItemCheckBoxVirtualDom returns correct DOM structure for unchecked item', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test Description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Heading',
    id: 'testItem',
    modified: false,
    type: 2,
    value: 'false',
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
      childCount: 3,
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
      checked: false,
    },
    {
      childCount: 0,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
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

test('getItemCheckBoxVirtualDom returns correct DOM structure for item with long error message', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test Description',
    errorMessage: 'This is a very long error message that describes the problem in detail',
    hasError: true,
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
      childCount: 3,
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
      childCount: 3,
      className: 'SettingsItemCheckBox',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: `${ClassNames.CheckBox} ${ClassNames.InputBoxError}`,
      id: domId,
      inputType: 'checkbox',
      name: 'testItem',
      onChange: 'handleSettingChecked',
      type: VirtualDomElements.Input,
      checked: true,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxBox,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.CheckBoxCheckmark,
      type: VirtualDomElements.Div,
    },
    text('✓'),
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: domId,
      type: VirtualDomElements.Label,
    },
    text('Test Description'),
    {
      childCount: 1,
      className: ClassNames.ErrorMessage,
      type: VirtualDomElements.Div,
    },
    text('This is a very long error message that describes the problem in detail'),
  ]

  expect(result).toEqual(expectedDom)
})
