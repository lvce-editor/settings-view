import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker';
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const getSettingsDom = (state: SettingsState): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      childCount: 1,
    },
    {
      type: VirtualDomElements.H1,
      childCount: 1,
    },
    text('Settings Dom: TODO'),
  ]
}
