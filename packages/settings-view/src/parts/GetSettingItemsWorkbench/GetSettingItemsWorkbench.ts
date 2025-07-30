import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsWorkbench = (): readonly SettingItem[] => {
  return [
    {
      id: 'theme',
      heading: SettingStrings.theme(),
      description: SettingStrings.themeDescription(),
      type: SettingItemType.String,
      value: 'Dark',
      category: InputName.WorkbenchTab,
    },
    {
      id: 'sidebarPosition',
      heading: SettingStrings.sidebarPosition(),
      description: SettingStrings.sidebarPositionDescription(),
      type: SettingItemType.String,
      value: 'Left',
      category: InputName.WorkbenchTab,
    },
  ]
}
