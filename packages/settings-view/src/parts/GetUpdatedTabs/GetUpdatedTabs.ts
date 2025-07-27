import type { Tab } from '../Tab/Tab.ts'

const getSelectedTabId = (tabs: readonly Tab[]): string => {
  for (const tab of tabs) {
    if (tab.selected) {
      return tab.id
    }
  }
  return ''
}

export const getUpdatedTabs = (tabs: readonly Tab[], selectedTabId: string): readonly Tab[] => {
  // Check if the clicked tab is already selected
  const clickedTabId = getSelectedTabId(tabs)
  if (clickedTabId === selectedTabId) {
    return tabs
  }

  return tabs.map((tab) => ({
    ...tab,
    selected: tab.id === selectedTabId,
  }))
}
