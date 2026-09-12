import { mergeClassNames } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const selectedTabClassName = mergeClassNames(ClassNames.Tab, ClassNames.TabSelected)

export const getTabClassName = (tab: Tab): string => {
  return tab.selected ? selectedTabClassName : ClassNames.Tab
}
