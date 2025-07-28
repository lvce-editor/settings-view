import { mergeClassNames } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getTabClassName = (tab: Tab): string => {
  return tab.selected ? mergeClassNames(ClassNames.Tab, ClassNames.TabSelected) : ClassNames.Tab
}
