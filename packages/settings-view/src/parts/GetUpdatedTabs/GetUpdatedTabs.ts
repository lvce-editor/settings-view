import type { Tab } from '../Tab/Tab.ts'

export const getUpdatedTabs = (tabs: readonly Tab[], selectedTabName: string): readonly Tab[] => {
  // Check if the clicked tab is already selected
  const clickedTab = tabs.find(tab => tab.label === selectedTabName)
  if (clickedTab?.selected) {
    return tabs
  }

  return tabs.map(tab => ({
    ...tab,
    selected: tab.label === selectedTabName,
  }))
}
