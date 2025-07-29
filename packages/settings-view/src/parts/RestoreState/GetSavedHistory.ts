export const getSavedHistory = (savedState: unknown): readonly string[] => {
  if (savedState && typeof savedState === 'object' && 'history' in savedState && Array.isArray(savedState.history)) {
    // Validate that all items are strings and limit to last 10 items
    const validHistory = savedState.history.filter((item): item is string => typeof item === 'string').slice(-10) // Keep only the last 10 items
    return validHistory
  }
  return []
}
