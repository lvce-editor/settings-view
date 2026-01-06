import { test, expect } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemUnknownVirtualDom } from '../src/parts/GetItemUnknownVirtualDom/GetItemUnknownVirtualDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemUnknownVirtualDom returns correct virtual DOM structure', () => {
  const result = getItemUnknownVirtualDom()

  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.SettingsItem,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    text(SettingStrings.unknownSettingType()),
  ])
})
