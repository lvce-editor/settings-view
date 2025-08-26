import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'

export const isItemModified = (item: SettingItem, preferences: ModifiedSettings): boolean => {
  return item.id in preferences
}
