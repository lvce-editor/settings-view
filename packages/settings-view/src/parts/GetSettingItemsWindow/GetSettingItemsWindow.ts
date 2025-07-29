import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsWindow = (): readonly SettingItem[] => {
  return [
    {
      id: 'windowTitle',
      heading: SettingStrings.windowTitle(),
      description: SettingStrings.windowTitleDescription(),
      type: SettingItemType.String,
      value: 'Settings View',
      category: InputName.WindowTab,
    },
    {
      id: 'windowSize',
      heading: SettingStrings.windowSize(),
      description: SettingStrings.windowSizeDescription(),
      type: SettingItemType.String,
      value: '1024x768',
      category: InputName.WindowTab,
    },
  ]
}
