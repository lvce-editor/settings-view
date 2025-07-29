export const getSavedScrollOffset = (savedState: unknown): number => {
  if (savedState && typeof savedState === 'object' && 'scrollOffset' in savedState && typeof savedState.scrollOffset === 'number') {
    return savedState.scrollOffset
  }
  return 0
}
