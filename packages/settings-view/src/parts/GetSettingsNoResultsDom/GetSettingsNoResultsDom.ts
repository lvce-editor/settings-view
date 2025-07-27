import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker';
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsNoResultsDom = (searchValue: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItems',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'SettingsNoResults',
      childCount: 1,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ]
}
