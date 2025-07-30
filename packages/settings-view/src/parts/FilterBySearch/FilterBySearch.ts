import type { SettingItem } from '../SettingItem/SettingItem.ts'

export const filterBySearch = (items: readonly SettingItem[], searchValue: string | null): readonly SettingItem[] => {
  if (!searchValue || !searchValue.trim()) {
    return items
  }

  const normalizedSearchValue = searchValue.toLowerCase().trim()
  return items.filter((item: Readonly<SettingItem>) => item.heading.toLowerCase().includes(normalizedSearchValue))
}
