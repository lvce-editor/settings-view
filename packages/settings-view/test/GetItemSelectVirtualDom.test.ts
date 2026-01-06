import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemSelectVirtualDom } from '../src/parts/GetItemSelectVirtualDom/GetItemSelectVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('getItemSelectVirtualDom returns virtual DOM with error when validation fails', () => {
  const item: DisplaySettingItem = {
    category: 'test',
    description: 'Test select description',
    errorMessage: 'Please select a valid option',
    hasError: true,
    heading: 'Test Select Setting',
    id: 'test',
    modified: false,
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
    type: SettingItemType.Enum,
    value: 'invalid_option',
  }
  const result = getItemSelectVirtualDom(item)

  // Check that error styling is applied to select
  const selectElement = result.find((element) => element.type === VirtualDomElements.Select)
  expect(selectElement).toBeDefined()
  expect(selectElement?.className).toBe(`${ClassNames.Select} ${ClassNames.InputBoxError}`)

  // Check that error message is present
  const errorElement = result.find((element) => element.className === ClassNames.ErrorMessage)
  expect(errorElement).toBeDefined()
})
