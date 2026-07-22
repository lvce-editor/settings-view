import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const errorMessageNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ErrorMessage,
  type: VirtualDomElements.Div,
}

export const getErrorMessageDom = (errorMessage: string): readonly VirtualDomNode[] => {
  if (!errorMessage) {
    return []
  }
  return [errorMessageNode, text(errorMessage)]
}
