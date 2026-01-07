import { MenuItemFlags } from '@lvce-editor/constants'
import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getMenuEntries = (): readonly MenuEntry[] => {
  return [
    {
      command: 'Settings.filter.advanced',
      flags: MenuItemFlags.None,
      id: 'filter-advanced',
      label: SettingStrings.advanced(),
    },
    {
      command: 'Settings.filter.experimental',
      flags: MenuItemFlags.None,
      id: 'filter-experimental',
      label: SettingStrings.experimental(),
    },
    {
      command: 'Settings.filter.extensionId',
      flags: MenuItemFlags.None,
      id: 'filter-extensionId',
      label: SettingStrings.extensionId(),
    },
    {
      command: 'Settings.filter.feature',
      flags: MenuItemFlags.None,
      id: 'filter-feature',
      label: SettingStrings.feature(),
    },
    {
      command: 'Settings.filter.language',
      flags: MenuItemFlags.None,
      id: 'filter-language',
      label: SettingStrings.language(),
    },
    {
      command: 'Settings.filter.modified',
      flags: MenuItemFlags.None,
      id: 'filter-modified',
      label: SettingStrings.modified(),
    },
    {
      command: 'Settings.filter.preview',
      flags: MenuItemFlags.None,
      id: 'filter-preview',
      label: SettingStrings.preview(),
    },
    {
      command: 'Settings.filter.settingId',
      flags: MenuItemFlags.None,
      id: 'filter-settingId',
      label: SettingStrings.settingId(),
    },
    {
      command: 'Settings.filter.stable',
      flags: MenuItemFlags.None,
      id: 'filter-stable',
      label: SettingStrings.stable(),
    },
    {
      command: 'Settings.filter.tag',
      flags: MenuItemFlags.None,
      id: 'filter-tag',
      label: SettingStrings.tag(),
    },
  ]
}
