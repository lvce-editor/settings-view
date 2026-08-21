import { MenuEntryId } from '@lvce-editor/constants'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { show2 } from '../ContextMenu/ContextMenu.ts'

export const handleContextMenu = async (state: SettingsState, settingId: string, x: number, y: number): Promise<SettingsState> => {
  const { id, items } = state
  if (items.every((item) => item.id !== settingId)) {
    return state
  }
  await show2(id, MenuEntryId.Settings, x, y, {
    menuId: MenuEntryId.Settings,
    settingId,
  })
  return state
}
