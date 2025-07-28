import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingsNoResultsDom = (searchValue: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsItems,
      childCount: 1,
    },
    {
      type: VirtualDomElements.P,
      className: ClassNames.SettingsNoResults,
      childCount: 1,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ]
}
