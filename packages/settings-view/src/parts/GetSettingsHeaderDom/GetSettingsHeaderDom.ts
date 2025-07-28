import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsInputDom } from '../GetSettingsInputDom/GetSettingsInputDom.ts'

export const getSettingsHeaderDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SettingsHeader,
      childCount: 1,
    },
    ...getSettingsInputDom(),
  ]
}
