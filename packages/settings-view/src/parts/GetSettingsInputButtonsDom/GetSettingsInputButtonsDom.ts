import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

const disabledClass = mergeClassNames(ClassNames.Button, ClassNames.InputButton, ClassNames.SearchFieldButton)

const enabledClass = mergeClassNames(ClassNames.Button, ClassNames.InputButton, ClassNames.SearchFieldButton, ClassNames.Disabled)

const getButtonClassName = (hasSearchValue: boolean): string => {
  if (hasSearchValue) {
    return disabledClass
  }
  return enabledClass
}

export const getSettingsInputButtonsDom = (hasSearchValue: boolean): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Button,
      className: getButtonClassName(hasSearchValue),
      childCount: 1,
      ariaLabel: SettingStrings.clear(),
      name: InputName.Clear,
      disabled: !hasSearchValue,
      onClick: DomEventListenerFunctions.HandleClickClear,
    },
    {
      type: VirtualDomElements.Div,
      className: mergeClassNames(ClassNames.MaskIcon, ClassNames.MaskIconClearAll),
      childCount: 0,
    },
  ]
}
