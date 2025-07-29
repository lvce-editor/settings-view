export const addToHistory = (
  history: readonly string[],
  value: string,
): { readonly newHistory: readonly string[]; readonly newHistoryIndex: number } => {
  let newHistory = history
  let newHistoryIndex = -1

  if (!value || !value.trim()) {
    return { newHistory, newHistoryIndex }
  }

  const trimmedValue = value.trim()

  // Check if this value is already in history
  const existingIndex = history.indexOf(trimmedValue)
  if (existingIndex !== -1) {
    newHistoryIndex = existingIndex
    return { newHistory, newHistoryIndex }
  }

  // Check if this value is a prefix of any existing history item
  // If it is, don't add it to history yet (it's still being typed)
  const isPrefixOfExisting = history.some((historyItem) => historyItem.startsWith(trimmedValue) && historyItem !== trimmedValue)

  if (isPrefixOfExisting) {
    // Don't add to history, but find the closest match for index
    const closestMatch = history.find((historyItem) => historyItem.startsWith(trimmedValue))
    if (closestMatch) {
      newHistoryIndex = history.indexOf(closestMatch)
    }
    return { newHistory, newHistoryIndex }
  }

  // Check if any existing history items are prefixes of this value
  // If so, remove all prefix items and add the complete value at the first prefix position
  const prefixItems = history.filter((historyItem) => trimmedValue.startsWith(historyItem) && historyItem !== trimmedValue)

  if (prefixItems.length > 0) {
    // Find the position of the first prefix item
    const firstPrefixIndex = history.findIndex((historyItem) => trimmedValue.startsWith(historyItem) && historyItem !== trimmedValue)

    // Remove all prefix items and add the complete value at the first prefix position

    // Insert the new value at the position where the first prefix was
    const beforePrefix = history.slice(0, firstPrefixIndex)
    const afterPrefix = history.slice(firstPrefixIndex).filter((historyItem) => !trimmedValue.startsWith(historyItem) || historyItem === trimmedValue)

    newHistory = [...beforePrefix, trimmedValue, ...afterPrefix]
    newHistoryIndex = firstPrefixIndex
  } else {
    // Add as new item
    newHistory = [...history, trimmedValue]
    newHistoryIndex = newHistory.length - 1
  }

  return {
    newHistory,
    newHistoryIndex,
  }
}
