export interface RestoredState {
  readonly deltaY: number
  readonly minLineY: number
  readonly root: string
  readonly scrollOffset: number
  readonly searchValue: string
  readonly tabId: string
  readonly history: readonly string[]
  readonly historyIndex: number
}
