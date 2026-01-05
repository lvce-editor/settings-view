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
      autocapitalize: 'off',
      autocomplete: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: mergeClassNames(ClassNames.InputBox, ClassNames.SettingsSearchInput, 'MultilineInputBox'),
      name: InputName.SettingsSearch,
      onFocus: DomEventListenerFunctions.HandleInputFocus,
      onInput: DomEventListenerFunctions.HandleInput,
      placeholder,
      spellcheck: false,
      type: VirtualDomElements.Input,
    },
  ]
}
