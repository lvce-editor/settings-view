export interface RestoredState {
  readonly deltaY: number
  readonly history: readonly string[]
  readonly historyIndex: number
  readonly minLineY: number
  readonly scrollOffset: number
  readonly searchValue: string
  readonly tabId: string
}
