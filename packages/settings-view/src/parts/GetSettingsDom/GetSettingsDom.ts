import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsHeaderDom } from '../GetSettingsHeaderDom/GetSettingsHeaderDom.ts'
import { getSettingsMainDom } from '../GetSettingsMainDom/GetSettingsMainDom.ts'

const parentNode: VirtualDomNode = {
  childCount: 2,
  className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
  type: VirtualDomElements.Div,
}

export const getSettingsDom = (state: SettingsState): readonly VirtualDomNode[] => {
  const { filteredItems, height, itemHeight, searchValue, tabs, visibleItems } = state
  const hasSearchValue = searchValue.trim().length > 0
  const filteredItemsCount = filteredItems.length
  return [
    parentNode,
    ...getSettingsHeaderDom(filteredItemsCount, hasSearchValue),
    ...getSettingsMainDom(tabs, visibleItems, filteredItemsCount, searchValue, height, itemHeight),
  ]
}
