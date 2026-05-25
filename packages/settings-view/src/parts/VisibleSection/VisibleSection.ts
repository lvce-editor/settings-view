import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'

export interface VisibleSection {
  readonly className: string
  readonly height: number
  readonly index: number
  readonly item: DisplaySettingItem
  readonly top: number
}

export interface VisibleSectionsResult {
  readonly bottomSpacerHeight: number
  readonly totalHeight: number
  readonly topSpacerHeight: number
  readonly visibleSections: readonly VisibleSection[]
}
