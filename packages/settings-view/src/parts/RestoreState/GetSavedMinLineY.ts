export const getSavedMinLineY = (savedState: unknown): number => {
  if (savedState && typeof savedState === 'object' && 'minLineY' in savedState && typeof savedState.minLineY === 'number') {
    return savedState.minLineY
  }
  return 0
}
