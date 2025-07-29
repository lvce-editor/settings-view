export const getSavedWorkspacePath = (savedState: unknown): string => {
  if (savedState && typeof savedState === 'object' && 'workspacePath' in savedState && typeof savedState.workspacePath === 'string') {
    return savedState.workspacePath
  }
  return ''
}
