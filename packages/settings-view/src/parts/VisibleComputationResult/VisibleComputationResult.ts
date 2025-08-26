import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'

export interface VisibleComputationResult {
  readonly visibleItems: readonly DisplaySettingItem[]
  readonly minLineY: number
  readonly maxLineY: number
}
