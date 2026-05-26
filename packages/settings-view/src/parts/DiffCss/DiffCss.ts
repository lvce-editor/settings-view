import type { SettingsState } from '../SettingsState/SettingsState.ts'

const hasEqualVisibleSections = (oldState: SettingsState, newState: SettingsState): boolean => {
  if (oldState.visibleSections.length !== newState.visibleSections.length) {
    return false
  }
  for (let index = 0; index < oldState.visibleSections.length; index++) {
    const oldSection = oldState.visibleSections[index]
    const newSection = newState.visibleSections[index]
    if (oldSection.className !== newSection.className || oldSection.height !== newSection.height) {
      return false
    }
  }
  return true
}

export const isEqual = (oldState: SettingsState, newState: SettingsState): boolean => {
  return (
    oldState.sideBarWidth === newState.sideBarWidth &&
    oldState.scrollBarThumbHeight === newState.scrollBarThumbHeight &&
    oldState.scrollBarThumbTop === newState.scrollBarThumbTop &&
    hasEqualVisibleSections(oldState, newState)
  )
}
