import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getClearButtonClassName } from '../GetClearButtonClassName/GetClearButtonClassName.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

const icon: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: mergeClassNames(ClassNames.MaskIcon, ClassNames.MaskIconClearAll),
  childCount: 0,
}

export const getSettingsInputButtonsDom = (hasSearchValue: boolean): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Button,
      className: getClearButtonClassName(hasSearchValue),
      childCount: 1,
      ariaLabel: SettingStrings.clear(),
      name: InputName.Clear,
      disabled: !hasSearchValue,
      onClick: DomEventListenerFunctions.HandleClickClear,
    },
    icon,
  ]
}
