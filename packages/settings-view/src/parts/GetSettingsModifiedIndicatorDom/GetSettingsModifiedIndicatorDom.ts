import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const modifiedIndicatorNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.ModifiedIndicator,
  type: VirtualDomElements.Div,
}

export const getSettingsModifiedIndicatorDom = (isModified: boolean): readonly VirtualDomNode[] => {
  if (!isModified) {
    return []
  }

  return [modifiedIndicatorNode]
}
