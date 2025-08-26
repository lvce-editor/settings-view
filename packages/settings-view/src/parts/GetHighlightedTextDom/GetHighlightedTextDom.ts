import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getHighlightedTextDom = (content: string, searchValue: string): readonly VirtualDomNode[] => {
  const normalized = searchValue.trim()
  if (!normalized) {
    return [text(content)]
  }
  const index = content.toLowerCase().indexOf(normalized.toLowerCase())
  if (index === -1) {
    return [text(content)]
  }
  const before = content.slice(0, index)
  const match = content.slice(index, index + normalized.length)
  const after = content.slice(index + normalized.length)
  return [
    ...[before ? text(before) : []],
    {
      type: VirtualDomElements.Span,
      className: ClassNames.Highlight,
      childCount: 1,
    },
    text(match),
    ...[after ? text(after) : []],
  ].flat() as readonly VirtualDomNode[]
}


