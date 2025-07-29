import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsExtensions = (): readonly SettingItem[] => {
  return [
    {
      id: 'extensionsAutoUpdate',
      heading: SettingStrings.autoUpdateExtensions(),
      description: SettingStrings.autoUpdateExtensionsDescription(),
      type: SettingItemType.Boolean,
      value: 'true',
      category: InputName.ExtensionsTab,
    },
    {
      id: 'extensionRecommendations',
      heading: SettingStrings.extensionRecommendations(),
      description: SettingStrings.extensionRecommendationsDescription(),
      type: SettingItemType.Boolean,
      value: 'true',
      category: InputName.ExtensionsTab,
    },
  ]
}
