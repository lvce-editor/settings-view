import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getSettingsInputBadgeDom } from '../GetSettingsInputBadgeDom/GetSettingsInputBadgeDom.ts'
import { getSettingsInputButtonsDom } from '../GetSettingsInputButtonsDom/GetSettingsInputButtonsDom.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsInputDom = (filteredSettingsCount: number): readonly VirtualDomNode[] => {
  const placeholder = SettingStrings.searchSettings()
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsInputWrapper,
      childCount: 3,
    },
    {
      type: VirtualDomElements.Input,
      className: mergeClassNames(ClassNames.InputBox, ClassNames.SettingsSearchInput),
      placeholder,
      childCount: 0,
      name: InputName.SettingsSearch,
      onInput: DomEventListenerFunctions.HandleInput,
    },
    ...getSettingsInputButtonsDom(),
    ...getSettingsInputBadgeDom(filteredSettingsCount),
  ]
}
