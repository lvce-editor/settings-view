import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsNoResultsDom = (searchValue: string): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: ClassNames.SettingsItems,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.SettingsNoResults,
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ]
}
