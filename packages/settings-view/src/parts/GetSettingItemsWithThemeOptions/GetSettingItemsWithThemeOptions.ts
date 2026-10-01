import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { Preferences } from '../Preferences/Preferences.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

const themeSettingId = 'workbench.colorTheme'

const getOptions = async (): Promise<readonly { id: string; label: string }[]> => {
  const themeNames: readonly string[] = await RendererWorker.invoke('ColorTheme.getColorThemeNames')
  return themeNames.map((name) => ({
    id: name,
    label: name,
  }))
}

export const getSettingItemsWithThemeOptions = async (items: readonly SettingItem[], preferences: Preferences): Promise<readonly SettingItem[]> => {
  const themeItem = items.find((item) => item.id === themeSettingId)
  if (!themeItem) {
    return items
  }
  const options = [...(await getOptions())]
  const currentTheme = preferences[themeSettingId] ?? themeItem.value
  if (options.every((option) => option.id !== currentTheme)) {
    options.push({
      id: currentTheme,
      label: `${currentTheme} (Unavailable)`,
    })
  }
  return items
    .filter((item) => item === themeItem || item.id !== themeSettingId)
    .map((item) => (item === themeItem ? { ...item, options, type: SettingItemType.Enum } : item))
}
