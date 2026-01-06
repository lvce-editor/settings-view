import { getMenuEntries } from '../GetMenuEntries/GetMenuEntries.ts'

export const getMenuIds = (): readonly string[] => {
  return getMenuEntries().map((entry) => entry.id)
}

