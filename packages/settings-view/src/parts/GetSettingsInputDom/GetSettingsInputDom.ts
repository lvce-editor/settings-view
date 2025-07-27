import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getSettingsInputDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsInputWrapper',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Input,
      className: 'SettingsSearchInput',
    },
  ]
}
