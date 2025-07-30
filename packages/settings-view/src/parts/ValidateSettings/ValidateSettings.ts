import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'

const isItemModified = (item: SettingItem, preferences: ModifiedSettings): boolean => {
  return item.id in preferences
}

export const validateSettings = (items: readonly SettingItem[], modifiedSettings: ModifiedSettings): readonly DisplaySettingItem[] => {
  console.log('validate items', items)
  return items.map((item) => {
    const value = modifiedSettings[item.id] ?? item.value
    if (item.id === 'editor.fontSize') {
      console.log({ value })
    }
    const errorMessage = item.validate ? item.validate(value) : ''
    const hasError = errorMessage.length > 0
    const modified = isItemModified(item, modifiedSettings)

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
