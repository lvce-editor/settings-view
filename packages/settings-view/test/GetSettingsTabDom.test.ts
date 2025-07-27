import { expect, test } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getTabVirtualDom } from '../src/parts/GetSettingsTabDom/GetSettingsTabDom.ts'

test('getTabVirtualDom returns expected DOM structure for normal tab', () => {
  const tab = { label: 'Test Tab', selected: false }
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Test Tab'),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getTabVirtualDom returns expected DOM structure for selected tab', () => {
  const tab = { label: 'Test Tab', selected: true }
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Li,
      className: 'Tab TabSelected',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Test Tab'),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getTabVirtualDom handles empty string', () => {
  const tab = { label: '', selected: false }
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text(''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getTabVirtualDom handles special characters', () => {
  const tab = { label: 'Tab with & special chars < > " \'', selected: false }
  const virtualDom = getTabVirtualDom(tab)

  const expectedDom = [
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Tab with & special chars < > " \''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})
