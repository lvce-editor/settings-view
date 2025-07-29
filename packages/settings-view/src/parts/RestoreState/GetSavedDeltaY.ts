export const getSavedDeltaY = (savedState: unknown): number => {
  if (savedState && typeof savedState === 'object' && 'deltaY' in savedState && typeof savedState.deltaY === 'number') {
    return savedState.deltaY
  }
  return 0
}
