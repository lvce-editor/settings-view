import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getSettingsHeaderDom } from '../GetSettingsHeaderDom/GetSettingsHeaderDom.ts'
import { getSettingsMainDom } from '../GetSettingsMainDom/GetSettingsMainDom.ts'

export const getSettingsDom = (state: SettingsState): readonly VirtualDomNode[] => {
  const { tabs, filteredItems, searchValue, height, scrollOffset, itemHeight } = state
  const hasSearchValue = searchValue.trim().length > 0
  const filteredItemsCount = filteredItems.length
  return [
    {
      type: VirtualDomElements.Div,
      childCount: 2,
      className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
    },
    ...getSettingsHeaderDom(filteredItemsCount, hasSearchValue),
    ...getSettingsMainDom(tabs, filteredItems, searchValue, height, scrollOffset, itemHeight),
  ]
}
