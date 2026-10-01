import { test, expect } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getItemCheckBoxVirtualDom } from '../src/parts/GetItemCheckBoxVirtualDom/GetItemCheckBoxVirtualDom.ts'
import { getItemColorVirtualDom } from '../src/parts/GetItemColorVirtualDom/GetItemColorVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemColorVirtualDom returns virtual DOM without error when no validation', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test color description',
    errorMessage: '',
    hasError: false,
    heading: 'Test Color Setting',
    id: 'test.color',
    isModified: false,
    type: SettingItemType.Color,
    value: '#ff0000',
  }
  const result = getItemColorVirtualDom(item)
  const domId = 'test\\.color'

  expect(result).toEqual([
    {
      childCount: 2,
      className: ClassNames.SettingsItem,
      'data-modified': false,
      name: item.id,
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
    isModified: true,
    type: SettingItemType.Color,
    value: 'invalid',
  }
  const result = getItemColorVirtualDom(item)
  const domId = 'test\\.color'

  expect(result).toEqual([
    {
      childCount: 3,
      className: ClassNames.SettingsItem,
      'data-modified': true,
      name: item.id,
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

test('getItemColorVirtualDom keeps the following boolean setting as a sibling row', () => {
  const colorItem: DisplaySettingItem = {
    category: 'test',
    description: 'Editor background color',
    errorMessage: '',
    hasError: false,
    heading: 'Editor background',
    id: 'editor.background',
    isModified: false,
    type: SettingItemType.Color,
    value: '#567567',
  }
  const booleanItem: DisplaySettingItem = {
    category: 'test',
    description: 'Controls whether unused code is shown',
    errorMessage: '',
    hasError: false,
    heading: 'Show Unused',
    id: 'editor.showUnused',
    isModified: false,
    type: SettingItemType.Boolean,
    value: true,
  }
  const nodes = [...getItemColorVirtualDom(colorItem), ...getItemCheckBoxVirtualDom(booleanItem)]

  const getNextNodeIndex = (index: number): number => {
    const node = nodes[index]
    let nextIndex = index + 1
    for (let childIndex = 0; childIndex < (node.childCount ?? 0); childIndex++) {
      nextIndex = getNextNodeIndex(nextIndex)
    }
    return nextIndex
  }

  const rows = []
  let index = 0
  while (index < nodes.length) {
    rows.push(nodes[index])
    index = getNextNodeIndex(index)
  }

  expect(index).toBe(nodes.length)
  expect(rows).toHaveLength(2)
  expect(rows.map((row) => row.name)).toEqual(['editor.background', 'editor.showUnused'])
  expect(rows[0].childCount).toBe(2)
  expect(rows[1].childCount).toBe(2)
})
