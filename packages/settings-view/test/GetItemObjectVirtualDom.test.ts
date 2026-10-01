import { expect, test } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getItemObjectVirtualDom } from '../src/parts/GetItemObjectVirtualDom/GetItemObjectVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemObjectVirtualDom renders an editable object setting', () => {
  const item: DisplaySettingItem = {
    category: 'git',
    description: 'Maps Git remote hosts to repository website base URLs',
    errorMessage: '',
    hasError: false,
    heading: 'Remote Hosts',
    id: 'git.remoteHosts',
    isModified: false,
    type: SettingItemType.Object,
    value: { 'github.com': 'https://github.com' },
  }

  expect(getItemObjectVirtualDom(item)).toEqual([
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
    text('Remote Hosts'),
    {
      childCount: 1,
      className: ClassNames.Label,
      htmlFor: 'git\\.remoteHosts',
      type: VirtualDomElements.Label,
    },
    text(item.description),
    {
      childCount: 0,
      className: ClassNames.InputBox,
      id: 'git\\.remoteHosts',
      inputType: 'text',
      name: item.id,
      onInput: DomEventListenerFunctions.HandleSettingInput,
      placeholder: SettingStrings.objectValue(),
      type: VirtualDomElements.Input,
    },
  ])
})
