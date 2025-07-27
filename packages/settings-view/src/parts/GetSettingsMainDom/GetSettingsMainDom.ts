import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getSettingsContentDom } from '../GetSettingsContentDom/GetSettingsContentDom.ts'
import { getSettingsSideBarDom } from '../GetSettingsSideBarDom/GetSettingsSideBarDom.ts'

export const getSettingsMainDom = (): readonly VirtualDomNode[] => {
  const tabs: readonly string[] = []
  return [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsMain',
      childCount: 2,
    },
    ...getSettingsSideBarDom(tabs),
    ...getSettingsContentDom(),
  ]
}
