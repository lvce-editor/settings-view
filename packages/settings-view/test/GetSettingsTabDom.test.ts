import { expect, test } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getTabVirtualDom } from '../src/parts/GetSettingsTabDom/GetSettingsTabDom.ts'

test('getTabVirtualDom returns expected DOM structure for normal tab', () => {
  const tab = { id: 'test-tab', label: 'Test Tab', selected: false }
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Button,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'test-tab',
      id: 'test-tab',
      ariaSelected: false,
    },
    text('Test Tab'),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getTabVirtualDom returns expected DOM structure for selected tab', () => {
  const tab = { id: 'selected-tab', label: 'Test Tab', selected: true }
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Button,
      className: 'Tab TabSelected',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'selected-tab',
      id: 'selected-tab',
      ariaSelected: true,
    },
    text('Test Tab'),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getTabVirtualDom handles empty string', () => {
  const tab = { id: 'empty-tab', label: '', selected: false }
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Button,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'empty-tab',
      id: 'empty-tab',
      ariaSelected: false,
    },
    text(''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getTabVirtualDom handles special characters', () => {
  const tab = { id: 'special-tab', label: 'Tab with & special chars < > " \'', selected: false }
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Button,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'special-tab',
      id: 'special-tab',
      ariaSelected: false,
    },
    text('Tab with & special chars < > " \''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})
