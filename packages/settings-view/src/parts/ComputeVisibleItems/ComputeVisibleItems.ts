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
  const safeHeight = Math.max(0, height)
  const minLineY = Math.max(0, Math.floor(Math.max(0, scrollOffset) / safeItemHeight))
  const itemsPerViewport = Math.max(1, Math.ceil(safeHeight / safeItemHeight) + 1)
  const maxLineY = Math.min(totalItems, minLineY + itemsPerViewport)
  const visibleItems = items.slice(minLineY, maxLineY)
  return { maxLineY, minLineY, visibleItems }
}
