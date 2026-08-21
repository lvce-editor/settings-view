import type { MenuEntryId } from '@lvce-editor/constants'

export interface ContextMenuPropsBase {
  readonly menuId: number
}

export interface ContextMenuPropsFilter extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryId.SettingsFilter
}

export interface ContextMenuPropsSetting extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryId.Settings
  readonly settingId: string
}

export type ContextMenuProps = ContextMenuPropsFilter | ContextMenuPropsSetting
