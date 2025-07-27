import type { Tab } from '../Tab/Tab.ts'

const getSelectedTabName = (tabs: readonly Tab[]): string => {
  for (const tab of tabs) {
    if (tab.selected) {
      return tab.label
    }
  }
  return ''
}

export const getUpdatedTabs = (tabs: readonly Tab[], selectedTabName: string): readonly Tab[] => {
  // Check if the clicked tab is already selected
  const clickedTab = getSelectedTabName(tabs)
  if (clickedTab === selectedTabName) {
    return tabs
  }

  return tabs.map((tab) => ({
    ...tab,
    selected: tab.label === selectedTabName,
  }))
}
