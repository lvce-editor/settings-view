export const getSavedTabId = (savedState: unknown): string => {
  if (savedState && typeof savedState === 'object' && 'selectedTab' in savedState && typeof savedState.selectedTab === 'string') {
    return savedState.selectedTab
  }
  return ''
}
