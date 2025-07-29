import { ParsedFilterQuery } from '../ParsedFilterQuery/ParsedFilterQuery.ts'

export const parseFilterQuery = (searchValue: string): ParsedFilterQuery => {
  return {
    query: searchValue,
    modified: false,
    id: '',
    language: '',
  }
}
