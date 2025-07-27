import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as InputName from '../InputName/InputName.ts'

export const getSettingsInputDom = (): readonly VirtualDomNode[] => {
  const placeholder = 'Search Settings'
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
      name: InputName.SettingsSearch, // TODO add input event listener
    },
    {
      type: VirtualDomElements.Button,
      className: 'Button InputButton',
      childCount: 1,
      ariaLabel: 'Clear', // TODO i18n string
      name: InputName.Clear, // TODO add click event listener
    },
    text('Clear'), // TODO use icon
  ]
}
