import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (uid: number): SavedState => {
  return {
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
  }
}
