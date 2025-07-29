export const getSavedSearchValue = (savedState: unknown): string => {
  if (savedState && typeof savedState === 'object' && 'searchValue' in savedState && typeof savedState.searchValue === 'string') {
    return savedState.searchValue
  }
  return ''
}
