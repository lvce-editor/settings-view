import type { Tab } from '../Tab/Tab.ts'
import * as InputName from '../InputName/InputName.ts'

export const getTabs = (): readonly Tab[] => {
  const tabs: readonly Tab[] = [
    {
      id: InputName.TextEditorTab,
      label: 'Text Editor',
      selected: true,
    },
    {
      id: InputName.WorkbenchTab,
      label: 'Workbench',
      selected: false,
    },
    {
      id: InputName.WindowTab,
      label: 'Window',
      selected: false,
    },
    {
      id: InputName.FeaturesTab,
      label: 'Features',
      selected: false,
    },
    {
      id: InputName.ApplicationsTab,
      label: 'Applications',
      selected: false,
    },
    {
      id: InputName.SecurityTab,
      label: 'Security',
      selected: false,
    },
    {
      id: InputName.ExtensionsTab,
      label: 'Extensions',
      selected: false,
    },
  ]
  return tabs
}
