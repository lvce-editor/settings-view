export const getInputId = (id: string): string => {
  return id.replaceAll('.', '\\.')
}
