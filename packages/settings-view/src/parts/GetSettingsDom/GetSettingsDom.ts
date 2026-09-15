import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getFilteredSchemaErrors } from '../GetFilteredSchemaErrors/GetFilteredSchemaErrors.ts'
import { getSettingsHeaderDom } from '../GetSettingsHeaderDom/GetSettingsHeaderDom.ts'
import { getSettingsMainDom } from '../GetSettingsMainDom/GetSettingsMainDom.ts'
import * as InputName from '../InputName/InputName.ts'

const parentNode: VirtualDomNode = {
  childCount: 2,
  className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
  type: VirtualDomElements.Div,
}

const getFilteredItemsCount = (isSchemaErrorsTab: boolean, schemaErrorsLength: number, filteredItemsLength: number): number => {
  if (isSchemaErrorsTab) {
    return schemaErrorsLength
  }
  return filteredItemsLength
}

export const getSettingsDom = (state: SettingsState): readonly VirtualDomNode[] => {
  const { filteredItems, height, itemHeight, preferences, schemaErrors = [], searchValue, tabs, visibleItems } = state
  const isSchemaErrorsTab = tabs.some((tab) => tab.selected && tab.id === InputName.SchemaErrorsTab)
  const hasSearchValue = searchValue.trim().length > 0
  const filteredSchemaErrors = getFilteredSchemaErrors(schemaErrors, searchValue)
  const filteredItemsCount = getFilteredItemsCount(isSchemaErrorsTab, filteredSchemaErrors.length, filteredItems.length)
  const mainDom = getSettingsMainDom(tabs, visibleItems, filteredItemsCount, searchValue, height, itemHeight, filteredSchemaErrors, preferences)
  return [parentNode, ...getSettingsHeaderDom(filteredItemsCount, hasSearchValue), ...mainDom]
}
