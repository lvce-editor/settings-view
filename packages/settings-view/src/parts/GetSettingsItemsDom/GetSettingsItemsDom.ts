import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getItemVirtualDom } from '../GetItemVirtualDom/GetItemVirtualDom.ts'
import type { VisibleSection } from '../VisibleSection/VisibleSection.ts'
import { getSettingsNoResultsDom } from '../GetSettingsNoResultsDom/GetSettingsNoResultsDom.ts'
import { getSpacerDom } from '../GetSpacerDom/GetSpacerDom.ts'

const getVisibleSectionDom = (section: VisibleSection): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: mergeClassNames(ClassNames.SettingsSection, section.className),
      type: VirtualDomElements.Div,
    },
    ...getItemVirtualDom(section.item),
  ]
}

export const getSettingsItemsDom = (
  visibleSections: readonly VisibleSection[],
  totalItemCount: number,
  searchValue: string,
  topSpacerHeight: number,
  bottomSpacerHeight: number,
): readonly VirtualDomNode[] => {
  if (totalItemCount === 0 && searchValue && searchValue.trim()) {
    return getSettingsNoResultsDom(searchValue)
  }
  const hasTopSpacer = topSpacerHeight > 0
  const hasBottomSpacer = bottomSpacerHeight > 0
  return [
    {
      childCount: visibleSections.length + (hasTopSpacer ? 1 : 0) + (hasBottomSpacer ? 1 : 0),
      className: ClassNames.SettingsItems,
      type: VirtualDomElements.Div,
    },
    ...(hasTopSpacer ? getSpacerDom(topSpacerHeight) : []),
    ...visibleSections.flatMap(getVisibleSectionDom),
    ...(hasBottomSpacer ? getSpacerDom(bottomSpacerHeight) : []),
  ]
}
