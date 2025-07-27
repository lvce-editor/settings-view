import type { Tab } from '../Tab/Tab.ts'

export const getTabs = (): readonly Tab[] => {
  const tabLabels = ['Text Editor', 'Workbench', 'Window', 'Features', 'Applications', 'Security', 'Extensions']
  const tabs: Tab[] = tabLabels.map((label, index) => ({
    label,
    selected: index === 0, // First tab is selected by default
  }))
  return tabs
}
