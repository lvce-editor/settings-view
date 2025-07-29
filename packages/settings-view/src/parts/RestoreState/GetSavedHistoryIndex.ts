export const getSavedHistoryIndex = (savedState: unknown, history: readonly string[]): number => {
  if (savedState && typeof savedState === 'object' && 'historyIndex' in savedState && typeof savedState.historyIndex === 'number') {
    const { historyIndex } = savedState
    // Ensure historyIndex is within valid bounds
    if (historyIndex >= 0 && historyIndex < history.length) {
      return historyIndex
    }
  }
  return -1
}
