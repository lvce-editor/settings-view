import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getItemNumberVirtualDom } from '../src/parts/GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

test('getItemNumberVirtualDom returns virtual DOM with error when validation fails', () => {
  const item: DisplaySettingItem = {
    id: 'test',
    heading: 'Test Number Setting',
    description: 'Test number description',
    type: SettingItemType.Number,
    value: -5,
    category: 'test',
    modified: false,
    errorMessage: 'Value must be positive',
    hasError: true,
  }
  const result = getItemNumberVirtualDom(item)

  // Check that error styling is applied to input
  const inputElement = result.find((element) => element.type === VirtualDomElements.Input)
  expect(inputElement).toBeDefined()
  expect(inputElement?.className).toBe(`${ClassNames.InputBox} ${ClassNames.InputBoxError}`)

  // Check that error message is present
  const errorElement = result.find((element) => element.className === ClassNames.ErrorMessage)
  expect(errorElement).toBeDefined()
})
