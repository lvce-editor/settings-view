import { expect, test } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getTabVirtualDom } from '../src/parts/GetSettingsTabDom/GetSettingsTabDom.ts'

test('getTabVirtualDom returns expected DOM structure for normal tab', () => {
  const tab = 'Test Tab'
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Test Tab'),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getTabVirtualDom handles empty string', () => {
  const tab = ''
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text(''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getTabVirtualDom handles special characters', () => {
  const tab = 'Tab with & special chars < > " \''
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Tab with & special chars < > " \''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})
