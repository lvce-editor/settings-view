import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { getClearButtonDom } from '../GetClearButtonDom/GetClearButtonDom.ts'
import { getFilterButtonDom } from '../GetFilterButtonDom/GetFilterButtonDom.ts'

export const getSettingsInputButtonsDom = (hasSearchValue: boolean): readonly VirtualDomNode[] => {
  return [...getClearButtonDom(hasSearchValue), ...getFilterButtonDom()]
}
