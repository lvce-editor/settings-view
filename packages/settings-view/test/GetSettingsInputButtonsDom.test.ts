import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getSettingsInputButtonsDom } from '../src/parts/GetSettingsInputButtonsDom/GetSettingsInputButtonsDom.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingsInputButtonsDom returns enabled button when hasSearchValue is true', () => {
  const hasSearchValue = true
  const result = getSettingsInputButtonsDom(hasSearchValue)

  const expectedDom = [
    {
      type: VirtualDomElements.Button,
      className: `${ClassNames.Button} ${ClassNames.InputButton} ${ClassNames.SearchFieldButton} ${ClassNames.Disabled}`,
      childCount: 1,
      ariaLabel: SettingStrings.clear(),
      name: InputName.Clear,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickClear,
    },
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.MaskIcon} ${ClassNames.MaskIconClearAll}`,
      childCount: 0,
    },
  ]

  expect(result).toEqual(expectedDom)
})

test('getSettingsInputButtonsDom returns disabled button when hasSearchValue is false', () => {
  const hasSearchValue = false
  const result = getSettingsInputButtonsDom(hasSearchValue)

  const expectedDom = [
    {
      type: VirtualDomElements.Button,
      className: `${ClassNames.Button} ${ClassNames.InputButton} ${ClassNames.SearchFieldButton}`,
      childCount: 1,
      ariaLabel: SettingStrings.clear(),
      name: InputName.Clear,
      disabled: true,
      onClick: DomEventListenerFunctions.HandleClickClear,
    },
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.MaskIcon} ${ClassNames.MaskIconClearAll}`,
      childCount: 0,
    },
  ]

  expect(result).toEqual(expectedDom)
})
