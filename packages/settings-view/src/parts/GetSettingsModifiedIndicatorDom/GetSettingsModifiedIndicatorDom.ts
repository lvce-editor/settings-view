import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getSettingsModifiedIndicatorDom = (isModified: boolean): readonly VirtualDomNode[] => {
  if (!isModified) {
    return []
  }

  return [
    {
      childCount: 0,
      className: ClassNames.ModifiedIndicator,
      type: VirtualDomElements.Div,
    },
  ]
}
