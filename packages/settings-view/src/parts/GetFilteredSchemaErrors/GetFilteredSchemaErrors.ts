import type { SchemaError } from '../SchemaError/SchemaError.ts'

export const getFilteredSchemaErrors = (errors: readonly SchemaError[], searchValue: string): readonly SchemaError[] => {
  const search = searchValue.trim().toLowerCase()
  if (!search) {
    return errors
  }
  return errors.filter((error) => `${error.id} ${error.message} ${error.source}`.toLowerCase().includes(search))
}
