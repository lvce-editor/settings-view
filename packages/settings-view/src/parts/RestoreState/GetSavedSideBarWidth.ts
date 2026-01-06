export const getSavedSideBarWidth = (savedState: unknown): number => {
  if (savedState && typeof savedState === 'object' && 'sideBarWidth' in savedState && typeof savedState.sideBarWidth === 'number') {
    return savedState.sideBarWidth
  }
  return 200
}
