import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getSettingsModifiedIndicatorDom = (isModified: boolean): readonly VirtualDomNode[] => {
  if (!isModified) {
    return []
  }

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ModifiedIndicator,
      childCount: 0,
    },
  ]
}
