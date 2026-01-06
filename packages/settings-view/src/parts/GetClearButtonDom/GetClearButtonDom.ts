import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getClearButtonClassName } from '../GetClearButtonClassName/GetClearButtonClassName.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

const clearIcon: VirtualDomNode = {
  childCount: 0,
  className: mergeClassNames(ClassNames.MaskIcon, ClassNames.MaskIconClearAll),
  type: VirtualDomElements.Div,
}

export const getClearButtonDom = (hasSearchValue: boolean): readonly VirtualDomNode[] => {
  return [
    {
      ariaLabel: SettingStrings.clear(),
      childCount: 1,
      className: getClearButtonClassName(hasSearchValue),
      disabled: !hasSearchValue,
      name: InputName.Clear,
      onClick: DomEventListenerFunctions.HandleClickClear,
      type: VirtualDomElements.Button,
    },
    clearIcon,
  ]
}
