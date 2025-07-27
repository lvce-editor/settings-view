import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getSettingsContentDom } from '../GetSettingsContentDom/GetSettingsContentDom.ts'
import { getSettingsSideBarDom } from '../GetSettingsSideBarDom/GetSettingsSideBarDom.ts'

export const getSettingsMainDom = (tabs: readonly string[]): readonly VirtualDomNode[] => {
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
