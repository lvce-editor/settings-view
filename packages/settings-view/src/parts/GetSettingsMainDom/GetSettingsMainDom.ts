import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import type { VisibleSection } from '../VisibleSection/VisibleSection.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getResizerVirtualDom } from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'
import { getSettingsContentDom } from '../GetSettingsContentDom/GetSettingsContentDom.ts'
import { getSettingsSideBarDom } from '../GetSettingsSideBarDom/GetSettingsSideBarDom.ts'

export const getSettingsMainDom = (
  tabs: readonly Tab[],
  visibleSections: readonly VisibleSection[],
  totalItemCount: number,
  totalContentHeight: number,
  searchValue: string,
  height: number,
  topSpacerHeight: number,
  bottomSpacerHeight: number,
): readonly VirtualDomNode[] => {
  const showScrollBar = totalContentHeight > height

  return [
    {
      childCount: 3,
      className: ClassNames.SettingsMain,
      type: VirtualDomElements.Div,
    },
    ...getSettingsSideBarDom(tabs),
    ...getResizerVirtualDom(),
    ...getSettingsContentDom(visibleSections, totalItemCount, tabs, searchValue, showScrollBar, topSpacerHeight, bottomSpacerHeight),
  ]
}
