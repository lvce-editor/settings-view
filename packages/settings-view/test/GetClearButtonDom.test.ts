import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getClearButtonDom } from '../src/parts/GetClearButtonDom/GetClearButtonDom.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getClearButtonDom returns enabled button and icon when hasSearchValue is true', () => {
  const hasSearchValue = true
  const result = getClearButtonDom(hasSearchValue)

  const expectedDom = [
    {
      ariaLabel: SettingStrings.clear(),
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      disabled: false,
      name: InputName.Clear,
      onClick: DomEventListenerFunctions.HandleClickClear,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: `${ClassNames.MaskIcon} ${ClassNames.MaskIconClearAll}`,
      type: VirtualDomElements.Div,
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getClearButtonDom returns disabled button and icon when hasSearchValue is false', () => {
  const hasSearchValue = false
  const result = getClearButtonDom(hasSearchValue)

  const expectedDom = [
    {
      ariaLabel: SettingStrings.clear(),
      childCount: 1,
      className: `${ClassNames.SearchFieldButton} SearchFieldButtonDisabled`,
      disabled: true,
      name: InputName.Clear,
      onClick: DomEventListenerFunctions.HandleClickClear,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: `${ClassNames.MaskIcon} ${ClassNames.MaskIconClearAll}`,
      type: VirtualDomElements.Div,
    },
  ]

  expect(result).toEqual(expectedDom)
})
