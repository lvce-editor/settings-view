import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { SectionHeightMetrics } from '../SectionHeightMetrics/SectionHeightMetrics.ts'
import type { VisibleSection, VisibleSectionsResult } from '../VisibleSection/VisibleSection.ts'
import { getSectionHeight } from '../GetSectionHeight/GetSectionHeight.ts'

export const computeVisibleSections = (
  items: readonly DisplaySettingItem[],
  viewportHeight: number,
  scrollOffset: number,
  metrics: SectionHeightMetrics,
): VisibleSectionsResult => {
  if (items.length === 0) {
    return {
      bottomSpacerHeight: 0,
      topSpacerHeight: 0,
      totalHeight: 0,
      visibleSections: [],
    }
  }

  const safeViewportHeight = Math.max(0, viewportHeight)
  const viewportTop = Math.max(0, scrollOffset)
  const viewportBottom = viewportTop + safeViewportHeight
  const visibleSections: VisibleSection[] = []
  let top = 0
  let topSpacerHeight = 0
  let foundVisibleSection = false

  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    const height = getSectionHeight(item, metrics)
    const sectionBottom = top + height
    const intersectsViewport = sectionBottom > viewportTop && top < viewportBottom

    if (intersectsViewport) {
      foundVisibleSection = true
      visibleSections.push({
        className: `Section-${index + 1}`,
        height,
        index,
        item,
        top,
      })
    } else if (!foundVisibleSection) {
      topSpacerHeight = sectionBottom
    }

    top = sectionBottom
  }

  const lastVisibleSection = visibleSections[visibleSections.length - 1]
  const bottomSpacerHeight = lastVisibleSection ? Math.max(0, top - (lastVisibleSection.top + lastVisibleSection.height)) : 0

  return {
    bottomSpacerHeight,
    topSpacerHeight,
    totalHeight: top,
    visibleSections,
  }
}
