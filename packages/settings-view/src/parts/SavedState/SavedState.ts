export interface SavedState {
  readonly minLineY: number
  readonly maxLineY: number
  readonly deltaY: number
  readonly searchValue: string
  readonly selectedTab: string
  readonly scrollOffset: number
  readonly focus: number
  readonly history: readonly string[]
  readonly historyIndex: number
}
