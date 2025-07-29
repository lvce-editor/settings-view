export const addToHistory = (
  history: readonly string[],
  value: string,
): { readonly newHistory: readonly string[]; readonly newHistoryIndex: number } => {
  let newHistory = history
  let newHistoryIndex = -1

  if (value && value.trim() && !history.includes(value)) {
    newHistory = [...history, value]
    newHistoryIndex = newHistory.length - 1
  } else if (value && value.trim()) {
    // If value already exists in history, find its index
    newHistoryIndex = history.indexOf(value)
  }

  return {
    newHistory,
    newHistoryIndex,
  }
}
