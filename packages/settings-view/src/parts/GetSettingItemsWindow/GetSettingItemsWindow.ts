import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsWindow = (): readonly SettingItem[] => {
  return [
    {
      category: InputName.WindowTab,
      description: SettingStrings.windowTitleDescription(),
      heading: SettingStrings.windowTitle(),
      id: 'windowTitle',
      type: SettingItemType.String,
      value: 'Settings View',
    },
    {
      category: InputName.WindowTab,
      description: SettingStrings.windowSizeDescription(),
      heading: SettingStrings.windowSize(),
      id: 'windowSize',
      type: SettingItemType.String,
      value: '1024x768',
    },
  ]
}
