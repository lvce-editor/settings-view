import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { Preferences } from '../Preferences/Preferences.ts'
import type { SchemaError } from '../SchemaError/SchemaError.ts'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getResizerVirtualDom } from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'
import { getSettingsContentDom } from '../GetSettingsContentDom/GetSettingsContentDom.ts'
import { getSettingsSideBarDom } from '../GetSettingsSideBarDom/GetSettingsSideBarDom.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'

const settingsMainNode: VirtualDomNode = {
  childCount: 3,
  className: ClassNames.SettingsMain,
  type: VirtualDomElements.Div,
}

export const getSettingsMainDom = (
  tabs: readonly Tab[],
  visibleItems: readonly DisplaySettingItem[],
  totalItemCount: number,
  searchValue: string,
  height: number,
  itemHeight: number,
  minLineY: number,
  maxLineY: number,
  schemaErrors: readonly SchemaError[] = [],
  preferences: Preferences = {},
): readonly VirtualDomNode[] => {
  const viewportHeight = getSettingsViewportHeight(height)
  const totalHeight = totalItemCount * itemHeight
  const showScrollBar = totalHeight > viewportHeight

  return [
    settingsMainNode,
    ...getSettingsSideBarDom(tabs),
    ...getResizerVirtualDom(),
    ...getSettingsContentDom(
      visibleItems,
      tabs,
      searchValue,
      showScrollBar,
      schemaErrors,
      preferences,
      minLineY * itemHeight,
      Math.max(0, totalHeight - maxLineY * itemHeight),
    ),
  ]
}
