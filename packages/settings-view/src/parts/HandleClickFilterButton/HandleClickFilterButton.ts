import { MenuEntryId } from '@lvce-editor/constants'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { show2 } from '../ContextMenu/ContextMenu.ts'

export const handleClickFilterButton = async (state: SettingsState, x: number, y: number): Promise<SettingsState> => {
  const { id } = state
  await show2(id, MenuEntryId.SettingsFilter, x, y, {
    menuId: MenuEntryId.SettingsFilter,
  })
  return state
}
