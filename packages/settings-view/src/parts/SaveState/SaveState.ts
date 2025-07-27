import type { SavedState } from '../SavedState/SavedState.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const saveState = (state: SettingsState): SavedState => {
  return {
    expandedPaths: [],
    root: '',
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
  }
}
