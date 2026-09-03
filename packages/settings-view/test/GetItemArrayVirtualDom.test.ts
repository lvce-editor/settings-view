import { expect, test } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getItemArrayVirtualDom } from '../src/parts/GetItemArrayVirtualDom/GetItemArrayVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemArrayVirtualDom renders an editable array setting', () => {
  const item: DisplaySettingItem = {
    category: 'features',
    description: 'Configures keyboard shortcuts handled by the simple browser',
    errorMessage: '',
    hasError: false,
    heading: 'Simple Browser Shortcuts',
    id: 'simpleBrowser.shortcuts',
    modified: false,
    type: SettingItemType.Array,
    value: [],
  }

  expect(getItemArrayVirtualDom(item)).toEqual([
    {
      childCount: 3,
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
    text('Simple Browser Shortcuts'),
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: 'simpleBrowser\\.shortcuts',
      type: VirtualDomElements.Label,
    },
    text('Configures keyboard shortcuts handled by the simple browser'),
    {
      childCount: 0,
      className: ClassNames.InputBox,
      id: 'simpleBrowser\\.shortcuts',
      inputType: 'text',
      name: item.id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.arrayValue(),
      type: VirtualDomElements.Input,
    },
  ])
})

test('getItemArrayVirtualDom renders validation errors', () => {
  const item: DisplaySettingItem = {
    category: 'features',
    description: 'Configures keyboard shortcuts handled by the simple browser',
    errorMessage: 'Expected an array',
    hasError: true,
    heading: 'Simple Browser Shortcuts',
    id: 'simpleBrowser.shortcuts',
    modified: true,
    type: SettingItemType.Array,
    value: 'invalid',
  }

  const result = getItemArrayVirtualDom(item)

  expect(result[0]).toEqual({
    childCount: 4,
    className: ClassNames.SettingsItem,
    'data-modified': true,
    name: item.id,
    role: AriaRoles.Group,
    type: VirtualDomElements.Div,
  })
  expect(result).toContainEqual({
    childCount: 0,
    className: `${ClassNames.InputBox} ${ClassNames.InputBoxError}`,
    id: 'simpleBrowser\\.shortcuts',
    inputType: 'text',
    name: item.id,
    onInput: DomEventListenerFunctions.HandleSettingInput,
    placeholder: SettingStrings.arrayValue(),
    type: VirtualDomElements.Input,
  })
  expect(result).toContainEqual(text('Expected an array'))
})
