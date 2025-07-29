import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'

export const getModifiedSettings = (preferences: any): ModifiedSettings => {
  const modifiedSettings = Object.create(null)
  for (const key of Object.keys(preferences)) {
    modifiedSettings[key] = true
  }
  return modifiedSettings
}
