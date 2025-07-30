import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsApplications = (): readonly SettingItem[] => {
  return [
    {
      id: 'telemetry',
      heading: SettingStrings.telemetry(),
      description: SettingStrings.telemetryDescription(),
      type: SettingItemType.Boolean,
      value: 'true',
      category: InputName.ApplicationsTab,
    },
    {
      id: 'updates',
      heading: SettingStrings.autoUpdates(),
      description: SettingStrings.autoUpdatesDescription(),
      type: SettingItemType.Boolean,
      value: 'true',
      category: InputName.ApplicationsTab,
    },
  ]
}
