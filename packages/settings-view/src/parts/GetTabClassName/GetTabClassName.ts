import { mergeClassNames } from '@lvce-editor/virtual-dom-worker'
import type { Tab } from '../Tab/Tab.ts'

export const getTabClassName = (tab: Tab): string => {
  return tab.selected ? mergeClassNames('Tab', 'TabSelected') : 'Tab'
}