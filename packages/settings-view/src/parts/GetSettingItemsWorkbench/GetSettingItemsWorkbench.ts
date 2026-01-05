import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsWorkbench = (): readonly SettingItem[] => {
  return [
    {
      category: InputName.WorkbenchTab,
      description: SettingStrings.themeDescription(),
      heading: SettingStrings.theme(),
      id: 'theme',
      type: SettingItemType.String,
      value: 'Dark',
    },
    {
      category: InputName.WorkbenchTab,
      description: SettingStrings.sidebarPositionDescription(),
      heading: SettingStrings.sidebarPosition(),
      id: 'sidebarPosition',
      type: SettingItemType.String,
      value: 'Left',
    },
  ]
}
