import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { Preferences } from '../Preferences/Preferences.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { isItemModified } from '../IsModified/IsModified.ts'

export const validateSettings = (
  items: readonly SettingItem[],
  modifiedSettings: ModifiedSettings,
  preferences: Preferences,
): readonly DisplaySettingItem[] => {
  return items.map((item) => {
    const value = preferences[item.id] ?? item.value
    const errorMessage = item.validate ? item.validate(value) : ''
    const hasError = errorMessage.length > 0
    const modified = isItemModified(item, modifiedSettings)

    return {
      category: item.category,
      description: item.description,
      errorMessage,
      hasError,
      heading: item.heading,
      id: item.id,
      modified,
      options: item.options,
      type: item.type,
      value: item.value,
    }
  })
}
