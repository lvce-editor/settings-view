import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getFilterButtonDom } from '../src/parts/GetFilterButtonDom/GetFilterButtonDom.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getFilterButtonDom returns filter button and icon', () => {
  const result = getFilterButtonDom()

  const expectedDom = [
    {
      ariaHasPopup: true,
      ariaLabel: SettingStrings.filter(),
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      disabled: false,
      name: InputName.Filter,
      onClick: DomEventListenerFunctions.HandleClickFilterButton,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: `${ClassNames.MaskIcon} ${ClassNames.MaskIconFilter}`,
      type: VirtualDomElements.Div,
    },
  ]

  expect(result).toEqual(expectedDom)
})
