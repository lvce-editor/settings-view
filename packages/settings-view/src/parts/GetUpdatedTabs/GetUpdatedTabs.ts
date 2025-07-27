import type { Tab } from '../Tab/Tab.ts'

export const getUpdatedTabs = (tabs: readonly Tab[], selectedTabName: string): readonly Tab[] => {
  return tabs.map((tab) => ({
    ...tab,
    selected: tab.label === selectedTabName,
  }))
}
