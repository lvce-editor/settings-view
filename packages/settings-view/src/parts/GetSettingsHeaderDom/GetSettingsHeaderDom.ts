import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsInputBadgeDom } from '../GetSettingsInputBadgeDom/GetSettingsInputBadgeDom.ts'
import { getSettingsInputButtonsDom } from '../GetSettingsInputButtonsDom/GetSettingsInputButtonsDom.ts'
import { getSettingsInputDom } from '../GetSettingsInputDom/GetSettingsInputDom.ts'

export const getSettingsHeaderDom = (filteredSettingsCount: number): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsHeader,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsInputWrapper,
      childCount: 3,
    },
    ...getSettingsInputDom(),
    ...getSettingsInputButtonsDom(),
    ...getSettingsInputBadgeDom(filteredSettingsCount),
  ]
}
