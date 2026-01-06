import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsExtensions = (): readonly SettingItem[] => {
  return [
    {
      category: InputName.ExtensionsTab,
      description: SettingStrings.autoUpdateExtensionsDescription(),
      heading: SettingStrings.autoUpdateExtensions(),
      id: 'extensionsAutoUpdate',
      type: SettingItemType.Boolean,
      value: 'true',
    },
    {
      category: InputName.ExtensionsTab,
      description: SettingStrings.extensionRecommendationsDescription(),
      heading: SettingStrings.extensionRecommendations(),
      id: 'extensionRecommendations',
      type: SettingItemType.Boolean,
      value: 'true',
    },
  ]
}
