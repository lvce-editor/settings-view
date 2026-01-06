import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getMenuEntries = (): readonly MenuEntry[] => {
  return [
    {
      command: 'Settings.filter.advanced',
      id: 'filter-advanced',
      label: SettingStrings.advanced(),
    },
    {
      command: 'Settings.filter.experimental',
      id: 'filter-experimental',
      label: SettingStrings.experimental(),
    },
    {
      command: 'Settings.filter.extensionId',
      id: 'filter-extensionId',
      label: SettingStrings.extensionId(),
    },
    {
      command: 'Settings.filter.feature',
      id: 'filter-feature',
      label: SettingStrings.feature(),
    },
    {
      command: 'Settings.filter.language',
      id: 'filter-language',
      label: SettingStrings.language(),
    },
    {
      command: 'Settings.filter.modified',
      id: 'filter-modified',
      label: SettingStrings.modified(),
    },
    {
      command: 'Settings.filter.preview',
      id: 'filter-preview',
      label: SettingStrings.preview(),
    },
    {
      command: 'Settings.filter.settingId',
      id: 'filter-settingId',
      label: SettingStrings.settingId(),
    },
    {
      command: 'Settings.filter.stable',
      id: 'filter-stable',
      label: SettingStrings.stable(),
    },
    {
      command: 'Settings.filter.tag',
      id: 'filter-tag',
      label: SettingStrings.tag(),
    },
  ]
}
