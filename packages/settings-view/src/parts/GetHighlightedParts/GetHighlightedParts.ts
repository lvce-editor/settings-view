import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getHighlightedParts = (content: string, searchValue: string): readonly VirtualDomNode[] => {
  const query = searchValue.trim()
  if (!query) {
    return [text(content)]
  }
  const lowerContent = content.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const index = lowerContent.indexOf(lowerQuery)
  if (index === -1) {
    return [text(content)]
  }
  const before = content.slice(0, index)
  const match = content.slice(index, index + query.length)
  const after = content.slice(index + query.length)
  const nodes: VirtualDomNode[] = []
  if (before) {
    nodes.push(text(before))
  }
  nodes.push({ type: VirtualDomElements.Span, className: 'Highlight', childCount: 1 } as any)
  nodes.push(text(match))
  if (after) {
    nodes.push(text(after))
  }
  return nodes
}
