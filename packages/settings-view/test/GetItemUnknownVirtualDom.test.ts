import { test, expect } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemUnknownVirtualDom } from '../src/parts/GetItemUnknownVirtualDom/GetItemUnknownVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getItemUnknownVirtualDom returns correct virtual DOM structure', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Unknown setting',
    errorMessage: '',
    hasError: false,
    heading: 'Unknown',
    id: 'test.unknown',
    modified: false,
    type: SettingItemType.None,
    value: undefined,
  }
  const result = getItemUnknownVirtualDom(item)

  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.SettingsItem,
      name: item.id,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    text(SettingStrings.unknownSettingType()),
  ])
})
