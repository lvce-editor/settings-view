import type { MenuEntryId } from '@lvce-editor/constants'

export interface ContextMenuPropsBase {
  readonly menuId: number
}

export interface ContextMenuPropsFilter extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryId.SettingsFilter
}

export type ContextMenuProps = ContextMenuPropsFilter
