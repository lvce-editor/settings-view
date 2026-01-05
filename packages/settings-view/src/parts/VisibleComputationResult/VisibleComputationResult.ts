import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'

export interface VisibleComputationResult {
  readonly maxLineY: number
  readonly minLineY: number
  readonly visibleItems: readonly DisplaySettingItem[]
}
