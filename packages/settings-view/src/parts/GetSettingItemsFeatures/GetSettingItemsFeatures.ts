import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsFeatures = (): readonly SettingItem[] => {
  return [
    {
      id: 'autoSave',
      heading: SettingStrings.autoSave(),
      description: SettingStrings.autoSaveDescription(),
      type: SettingItemType.Boolean,
      value: 'true',
      category: InputName.FeaturesTab,
    },
    {
      id: 'formatOnSave',
      heading: SettingStrings.formatOnSave(),
      description: SettingStrings.formatOnSaveDescription(),
      type: SettingItemType.Boolean,
      value: 'false',
      category: InputName.FeaturesTab,
    },
  ]
}
