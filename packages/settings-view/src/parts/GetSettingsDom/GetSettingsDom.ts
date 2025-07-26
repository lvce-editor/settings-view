import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getSettingsDom = (state: SettingsState): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      childCount: 1,
      className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
    },
    {
      type: VirtualDomElements.H1,
      childCount: 1,
    },
    text('Settings Dom: TODO'),
  ]
}
