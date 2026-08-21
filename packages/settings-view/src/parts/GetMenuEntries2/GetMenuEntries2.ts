import { MenuEntryId, MenuItemFlags } from '@lvce-editor/constants'
import type { ContextMenuProps } from '../ContextMenuProps/ContextMenuProps.ts'
import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getMenuEntries } from '../GetMenuEntries/GetMenuEntries.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getMenuEntries2 = (state: SettingsState, props: ContextMenuProps): readonly MenuEntry[] => {
  if (props.menuId === MenuEntryId.SettingsFilter) {
    return getMenuEntries()
  }
  const { modifiedSettings } = state
  const modified = props.settingId in modifiedSettings
  return [
    {
      args: [props.settingId],
      command: 'Settings.resetSetting',
      flags: modified ? MenuItemFlags.None : MenuItemFlags.Disabled,
      id: 'resetSetting',
      label: SettingStrings.resetSetting(),
    },
  ]
}
