import { test, expect } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemUnknownVirtualDom } from '../src/parts/GetItemUnknownVirtualDom/GetItemUnknownVirtualDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemUnknownVirtualDom returns correct virtual DOM structure', () => {
  const result = getItemUnknownVirtualDom()

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    childCount: 1,
    className: ClassNames.SettingsItem,
    role: AriaRoles.Group,
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual(text(SettingStrings.unknownSettingType()))
})
