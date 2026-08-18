import { MenuEntryId } from '@lvce-editor/constants'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { show2 } from '../ContextMenu/ContextMenu.ts'

const filterButtonWidth = 20
const searchFieldHeight = 26
const settingsHeaderPaddingRight = 24
const settingsHeaderPaddingTop = 14

const getMenuPosition = (state: SettingsState, eventX: number, eventY: number): readonly [number, number] => {
  if (eventX !== 0 || eventY !== 0) {
    return [eventX, eventY]
  }
  const { width, x, y } = state
  const menuX = x + width - settingsHeaderPaddingRight - filterButtonWidth / 2
  const menuY = y + settingsHeaderPaddingTop + searchFieldHeight / 2
  return [menuX, menuY]
}

export const handleClickFilterButton = async (state: SettingsState, eventX: number, eventY: number): Promise<SettingsState> => {
  const { id } = state
  const [menuX, menuY] = getMenuPosition(state, eventX, eventY)
  await show2(id, MenuEntryId.SettingsFilter, menuX, menuY, {
    menuId: MenuEntryId.SettingsFilter,
  })
  return state
}
