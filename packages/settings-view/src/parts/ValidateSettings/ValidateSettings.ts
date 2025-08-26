import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { Preferences } from '../Preferences/Preferences.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { isItemModified } from '../IsModified/IsModified.ts'

export const validateSettings = (
  items: readonly SettingItem[],
  modifiedSettings: ModifiedSettings,
  preferences: Preferences,
  searchValue?: string,
  highlightsEnabled?: boolean,
): readonly DisplaySettingItem[] => {
  return items.map((item) => {
    const value = preferences[item.id] ?? item.value
    const errorMessage = item.validate ? item.validate(value) : ''
    const hasError = errorMessage.length > 0
    const modified = isItemModified(item, modifiedSettings)

    const base = {
      id: item.id,
      heading: item.heading,
      description: item.description,
      type: item.type,
      value: item.value,
      category: item.category,
      options: item.options,
      modified,
      errorMessage,
      hasError,
    }
    if (highlightsEnabled && searchValue && searchValue.trim()) {
      // Lazy import to avoid cycle
      const { getHighlightedParts } = require('../GetHighlightedParts/GetHighlightedParts.ts') as {
        getHighlightedParts(content: string, searchValue: string): readonly any[]
      }
      return {
        ...base,
        headingChildren: getHighlightedParts(item.heading, searchValue),
        descriptionChildren: getHighlightedParts(item.description, searchValue),
      }
    }
    return base as DisplaySettingItem
  })
}
