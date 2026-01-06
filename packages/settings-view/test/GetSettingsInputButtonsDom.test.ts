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
      ariaLabel: SettingStrings.clear(),
      childCount: 1,
      className: `${ClassNames.SearchFieldButton}`,
      disabled: false,
      name: InputName.Clear,
      onClick: DomEventListenerFunctions.HandleClickClear,
      type: VirtualDomElements.Button,
    },
    {
      ariaLabel: SettingStrings.filter(),
      childCount: 1,
      className: `${ClassNames.SearchFieldButton}`,
      disabled: false,
      name: InputName.Filter,
      onClick: DomEventListenerFunctions.HandleClickFilterButton,
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

test('getSettingsInputButtonsDom returns disabled button when hasSearchValue is false', () => {
  const hasSearchValue = false
  const result = getSettingsInputButtonsDom(hasSearchValue)

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
      ariaLabel: SettingStrings.filter(),
      childCount: 1,
      className: `${ClassNames.SearchFieldButton}`,
      disabled: false,
      name: InputName.Filter,
      onClick: DomEventListenerFunctions.HandleClickFilterButton,
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
