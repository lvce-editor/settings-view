import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { SectionHeightMetrics } from '../SectionHeightMetrics/SectionHeightMetrics.ts'
import type { VisibleSection } from '../VisibleSection/VisibleSection.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleSections } from '../ComputeVisibleSections/ComputeVisibleSections.ts'

export interface DerivedSectionState {
  readonly bottomSpacerHeight: number
  readonly maxLineY: number
  readonly minLineY: number
  readonly scrollBarThumbHeight: number
  readonly scrollBarThumbTop: number
  readonly topSpacerHeight: number
  readonly totalContentHeight: number
  readonly visibleItems: readonly DisplaySettingItem[]
  readonly visibleSections: readonly VisibleSection[]
}

export const computeDerivedSectionState = (
  filteredItems: readonly DisplaySettingItem[],
  height: number,
  scrollOffset: number,
  scrollBarMinHeight: number,
  metrics: SectionHeightMetrics,
): DerivedSectionState => {
  const { bottomSpacerHeight, topSpacerHeight, totalHeight, visibleSections } = computeVisibleSections(filteredItems, height, scrollOffset, metrics)
  const { thumbHeight, thumbTop } = computeScrollBar(height, totalHeight, scrollOffset, scrollBarMinHeight)
  const firstVisibleSection = visibleSections[0]
  const lastVisibleSection = visibleSections[visibleSections.length - 1]
  return {
    bottomSpacerHeight,
    maxLineY: lastVisibleSection ? lastVisibleSection.index + 1 : 0,
    minLineY: firstVisibleSection ? firstVisibleSection.index : 0,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
    topSpacerHeight,
    totalContentHeight: totalHeight,
    visibleItems: visibleSections.map((section) => section.item),
    visibleSections,
  }
}
