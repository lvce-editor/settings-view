import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getSettingsSideBarDom } from '../src/parts/GetSettingsSideBarDom/GetSettingsSideBarDom.ts'

test('getSettingsSideBarDom handles clicks across the whole sidebar', () => {
  const virtualDom = getSettingsSideBarDom([])

  expect(virtualDom[0]).toEqual({
    childCount: 1,
    className: 'SettingsSideBar',
    onClick: DomEventListenerFunctions.HandleClickTab,
    type: VirtualDomElements.Aside,
  })
})
