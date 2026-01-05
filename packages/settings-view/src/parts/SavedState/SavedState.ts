export interface SavedState {
  readonly deltaY: number
  readonly focus: number
  readonly history: readonly string[]
  readonly historyIndex: number
  readonly maxLineY: number
  readonly minLineY: number
  readonly scrollOffset: number
  readonly searchValue: string
  readonly selectedTab: string
}
