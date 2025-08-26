import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsHeaderDom } from '../GetSettingsHeaderDom/GetSettingsHeaderDom.ts'
import { getSettingsMainDom } from '../GetSettingsMainDom/GetSettingsMainDom.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  childCount: 2,
  className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
}

export const getSettingsDom = (state: SettingsState): readonly VirtualDomNode[] => {
  const { tabs, filteredItems, visibleItems, minLineY, searchValue, height, scrollOffset, itemHeight } = state
  const hasSearchValue = searchValue.trim().length > 0
  const filteredItemsCount = filteredItems.length
  return [
    parentNode,
    ...getSettingsHeaderDom(filteredItemsCount, hasSearchValue),
    ...getSettingsMainDom(tabs, visibleItems, filteredItemsCount, searchValue, height, scrollOffset, itemHeight, minLineY),
  ]
}
