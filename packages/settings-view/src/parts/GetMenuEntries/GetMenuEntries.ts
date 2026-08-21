import { MenuItemFlags } from '@lvce-editor/constants'
import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getMenuEntries = (): readonly MenuEntry[] => {
  return [
    {
      command: 'Settings.filterAdvanced',
      flags: MenuItemFlags.None,
      id: 'filter-advanced',
      label: SettingStrings.advanced(),
    },
    {
      command: 'Settings.filterExperimental',
      flags: MenuItemFlags.None,
      id: 'filter-experimental',
      label: SettingStrings.experimental(),
    },
    {
      command: 'Settings.filterExtensionId',
      flags: MenuItemFlags.None,
      id: 'filter-extensionId',
      label: SettingStrings.extensionId(),
    },
    {
      command: 'Settings.filterFeature',
      flags: MenuItemFlags.None,
      id: 'filter-feature',
      label: SettingStrings.feature(),
    },
    {
      command: 'Settings.filterLanguage',
      flags: MenuItemFlags.None,
      id: 'filter-language',
      label: SettingStrings.language(),
    },
    {
      command: 'Settings.filterModified',
      flags: MenuItemFlags.None,
      id: 'filter-modified',
      label: SettingStrings.modified(),
    },
    {
      command: 'Settings.filterPreview',
      flags: MenuItemFlags.None,
      id: 'filter-preview',
      label: SettingStrings.preview(),
    },
    {
      command: 'Settings.filterSettingId',
      flags: MenuItemFlags.None,
      id: 'filter-settingId',
      label: SettingStrings.settingId(),
    },
    {
      command: 'Settings.filterStable',
      flags: MenuItemFlags.None,
      id: 'filter-stable',
      label: SettingStrings.stable(),
    },
    {
      command: 'Settings.filterTag',
      flags: MenuItemFlags.None,
      id: 'filter-tag',
      label: SettingStrings.tag(),
    },
  ]
}
