import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsApplications = (): readonly SettingItem[] => {
  return [
    {
      category: InputName.ApplicationsTab,
      description: SettingStrings.telemetryDescription(),
      heading: SettingStrings.telemetry(),
      id: 'telemetry',
      type: SettingItemType.Boolean,
      value: 'true',
    },
    {
      category: InputName.ApplicationsTab,
      description: SettingStrings.autoUpdatesDescription(),
      heading: SettingStrings.autoUpdates(),
      id: 'updates',
      type: SettingItemType.Boolean,
      value: 'true',
    },
  ]
}
