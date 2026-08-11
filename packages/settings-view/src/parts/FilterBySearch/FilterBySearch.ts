import type { SettingItem } from '../SettingItem/SettingItem.ts'

const normalizeSearchText = (value: string): string => {
  return value
    .replaceAll(/([a-z\d])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .replaceAll(/[^a-z\d]+/g, ' ')
    .trim()
}

const matchesSearch = (item: Readonly<SettingItem>, searchValue: string): boolean => {
  const searchTargets = [item.heading, item.id, ...(item.aliases ?? [])]
  return searchTargets.some((target) => normalizeSearchText(target).includes(searchValue))
}

export const filterBySearch = (items: readonly SettingItem[], searchValue: string | null): readonly SettingItem[] => {
  if (!searchValue || !searchValue.trim()) {
    return items
  }

  const normalizedSearchValue = normalizeSearchText(searchValue)
  if (!normalizedSearchValue) {
    return []
  }
  return items.filter((item: Readonly<SettingItem>) => matchesSearch(item, normalizedSearchValue))
}
