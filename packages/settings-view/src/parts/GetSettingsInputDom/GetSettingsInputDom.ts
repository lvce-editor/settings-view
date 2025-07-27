import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsInputDom = (): readonly VirtualDomNode[] => {
  const placeholder = SettingStrings.searchSettings()
  return [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsInputWrapper',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      className: 'InputBox SettingsSearchInput',
      placeholder,
      childCount: 0,
      name: InputName.SettingsSearch,
      onInput: DomEventListenerFunctions.HandleInput,
    },
    {
      type: VirtualDomElements.Button,
      className: 'Button InputButton SearchFieldButton',
      childCount: 1,
      ariaLabel: SettingStrings.clear(),
      name: InputName.Clear, // TODO add click event listener
      onClick: DomEventListenerFunctions.HandleClickClear,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconClearAll',
      childCount: 0,
    },
  ]
}
