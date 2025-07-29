import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'

const isItemModified = (item: Readonly<SettingItem>, preferences: ModifiedSettings): boolean => {
  return item.id in preferences
}

export const validateSettings = (items: readonly SettingItem[], preferences: ModifiedSettings): readonly DisplaySettingItem[] => {
  return items.map((item) => {
    const errorMessage = item.validate ? item.validate(item.value) : ''
    const hasError = errorMessage.length > 0
    const modified = isItemModified(item, preferences)

    return {
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
  })
}
