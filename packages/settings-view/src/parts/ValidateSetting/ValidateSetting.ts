import type { SettingItem } from '../SettingItem/SettingItem.ts'

export const validateSetting = (item: SettingItem): string => {
  if (!item.validate) {
    return ''
  }
  return item.validate(item.value)
}
