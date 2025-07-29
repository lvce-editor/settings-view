import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'

export const getNewModifiedSettings = (modifiedSettings: ModifiedSettings, name: string): ModifiedSettings => {
  if (name in modifiedSettings) {
    return modifiedSettings
  }
  return {
    ...modifiedSettings,
    [name]: true,
  }
}
