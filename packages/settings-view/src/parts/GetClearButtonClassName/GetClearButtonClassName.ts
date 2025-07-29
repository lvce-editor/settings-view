import { mergeClassNames } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const enabledClass = mergeClassNames(ClassNames.Button, ClassNames.InputButton, ClassNames.SearchFieldButton)

const disabledClass = mergeClassNames(enabledClass, ClassNames.Disabled)

export const getClearButtonClassName = (hasSearchValue: boolean): string => {
  if (hasSearchValue) {
    return disabledClass
  }
  return enabledClass
}
