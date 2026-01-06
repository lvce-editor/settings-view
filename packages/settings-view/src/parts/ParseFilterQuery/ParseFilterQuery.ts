import type { ParsedFilterQuery } from '../ParsedFilterQuery/ParsedFilterQuery.ts'

export const parseFilterQuery = (searchValue: string): ParsedFilterQuery => {
  return {
    id: '',
    language: '',
    modified: false,
    query: searchValue,
  }
}
