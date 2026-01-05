import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsFeatures = (): readonly SettingItem[] => {
  return [
    {
      category: InputName.FeaturesTab,
      description: SettingStrings.autoSaveDescription(),
      heading: SettingStrings.autoSave(),
      id: 'autoSave',
      type: SettingItemType.Boolean,
      value: 'true',
    },
    {
      category: InputName.FeaturesTab,
      description: SettingStrings.formatOnSaveDescription(),
      heading: SettingStrings.formatOnSave(),
      id: 'formatOnSave',
      type: SettingItemType.Boolean,
      value: 'false',
    },
  ]
}
