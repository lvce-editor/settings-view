import type { ParsedFilterQuery } from '../ParsedFilterQuery/ParsedFilterQuery.ts'

export const parseFilterQuery = (searchValue: string): ParsedFilterQuery => {
  const words = searchValue.split(/\s+/)
  const modified = words.includes('@modified')
  const query = words
    .filter((word) => word !== '@modified')
    .join(' ')
    .trim()
  return {
    id: '',
    language: '',
    modified,
    query,
  }
}
