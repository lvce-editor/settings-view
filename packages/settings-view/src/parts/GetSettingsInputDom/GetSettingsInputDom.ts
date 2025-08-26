import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsInputDom = (): readonly VirtualDomNode[] => {
  const placeholder = SettingStrings.searchSettings()
  return [
    {
      type: VirtualDomElements.Input,
      className: mergeClassNames(ClassNames.InputBox, ClassNames.SettingsSearchInput, 'MultilineInputBox'),
      placeholder,
      autocomplete: 'off',
      autocorrect: 'off',
      autocapitalize: 'off',
      spellcheck: false,
      childCount: 0,
      name: InputName.SettingsSearch,
      onInput: DomEventListenerFunctions.HandleInput,
      onFocus: DomEventListenerFunctions.HandleInputFocus,
    },
  ]
}
