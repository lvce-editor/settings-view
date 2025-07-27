import type { Tab } from '../Tab/Tab.ts'

export const getTabs = (): readonly Tab[] => {
  const tabs: readonly Tab[] = [
    {
      id: 'text-editor',
      label: 'Text Editor',
      selected: true,
    },
    {
      id: 'workbench',
      label: 'Workbench',
      selected: false,
    },
    {
      id: 'window',
      label: 'Window',
      selected: false,
    },
    {
      id: 'features',
      label: 'Features',
      selected: false,
    },
    {
      id: 'applications',
      label: 'Applications',
      selected: false,
    },
    {
      id: 'security',
      label: 'Security',
      selected: false,
    },
    {
      id: 'extensions',
      label: 'Extensions',
      selected: false,
    },
  ]
  return tabs
}
