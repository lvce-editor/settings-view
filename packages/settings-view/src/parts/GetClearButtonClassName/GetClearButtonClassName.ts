import { mergeClassNames } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const enabledClass = ClassNames.SearchFieldButton

const disabledClass = mergeClassNames(enabledClass, 'SearchFieldButtonDisabled')

export const getClearButtonClassName = (hasSearchValue: boolean): string => {
  if (hasSearchValue) {
    return enabledClass
  }
  return disabledClass
}
