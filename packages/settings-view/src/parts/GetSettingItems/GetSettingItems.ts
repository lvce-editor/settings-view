import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

export const getSettingItems = async (): Promise<readonly SettingItem[]> => {
  return [
    {
      heading: 'Font Size',
      description: 'The font size of the editor',
      type: SettingItemType.Number,
      value: '15px',
    },
  ]
}
