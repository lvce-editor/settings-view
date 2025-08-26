import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { VisibleComputationResult } from '../VisibleComputationResult/VisibleComputationResult.ts'

export const computeVisibleItems = (
  items: readonly DisplaySettingItem[],
  height: number,
  scrollOffset: number,
  itemHeight: number,
): VisibleComputationResult => {
  const safeItemHeight = itemHeight <= 0 ? 1 : itemHeight
  const totalItems = items.length
  const minLineY = Math.max(0, Math.floor(scrollOffset / safeItemHeight))
  const itemsPerViewport = Math.max(1, Math.ceil(height / safeItemHeight))
  const maxLineY = Math.min(totalItems, minLineY + itemsPerViewport)
  const visibleItems = items.slice(minLineY, maxLineY)
  return {
    visibleItems,
    minLineY,
    maxLineY,
  }
}
