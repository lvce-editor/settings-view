import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getErrorMessageDom = (errorMessage: string): readonly VirtualDomNode[] => {
  if (!errorMessage) {
    return []
  }
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ErrorMessage,
      childCount: 1,
    },
    text(errorMessage),
  ]
}