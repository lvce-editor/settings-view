import { expect, test } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getTabVirtualDom } from '../src/parts/GetSettingsTabDom/GetSettingsTabDom.ts'

test('getTabVirtualDom returns expected DOM structure for normal tab', () => {
  const tab = { id: 'test-tab', label: 'Test Tab', selected: false }
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      ariaSelected: false,
      childCount: 1,
      className: 'Tab',
      id: 'test-tab',
      name: 'test-tab',
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
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
      ariaSelected: true,
      childCount: 1,
      className: 'Tab TabSelected',
      id: 'selected-tab',
      name: 'selected-tab',
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
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
      ariaSelected: false,
      childCount: 1,
      className: 'Tab',
      id: 'empty-tab',
      name: 'empty-tab',
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
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
      ariaSelected: false,
      childCount: 1,
      className: 'Tab',
      id: 'special-tab',
      name: 'special-tab',
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
    },
    text('Tab with & special chars < > " \''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})
