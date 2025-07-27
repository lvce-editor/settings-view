import type { Tab } from '../Tab/Tab.ts'

export const getSelectedTabId = (tabs: readonly Tab[]): string => {
  for (const tab of tabs) {
    if (tab.selected) {
      return tab.id
    }
  }
  return ''
}
