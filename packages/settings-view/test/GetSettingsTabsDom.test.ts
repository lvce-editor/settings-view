import { expect, test } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getSettingsTabsDom } from '../src/parts/GetSettingsTabsDom/GetSettingsTabsDom.ts'

test('getSettingsTabsDom returns expected DOM structure for single tab', () => {
  const tabs = [{ id: 'test-tab', label: 'Test Tab', selected: false }]
  const virtualDom = getSettingsTabsDom(tabs)

  const expectedDom = [
    {
      childCount: 1,
      className: 'SettingsTabs',
      onClick: DomEventListenerFunctions.HandleClickTab,
      role: AriaRoles.TabList,
      type: VirtualDomElements.Ul,
    },
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

test('getSettingsTabsDom returns expected DOM structure for multiple tabs', () => {
  const tabs = [
    { id: 'tab1', label: 'Tab 1', selected: true },
    { id: 'tab2', label: 'Tab 2', selected: false },
    { id: 'tab3', label: 'Tab 3', selected: false },
  ]
  const virtualDom = getSettingsTabsDom(tabs)

  const expectedDom = [
    {
      childCount: 3,
      className: 'SettingsTabs',
      onClick: DomEventListenerFunctions.HandleClickTab,
      role: AriaRoles.TabList,
      type: VirtualDomElements.Ul,
    },
    {
      ariaSelected: true,
      childCount: 1,
      className: 'Tab TabSelected',
      id: 'tab1',
      name: 'tab1',
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
    },
    text('Tab 1'),
    {
      ariaSelected: false,
      childCount: 1,
      className: 'Tab',
      id: 'tab2',
      name: 'tab2',
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
    },
    text('Tab 2'),
    {
      ariaSelected: false,
      childCount: 1,
      className: 'Tab',
      id: 'tab3',
      name: 'tab3',
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
    },
    text('Tab 3'),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getSettingsTabsDom handles empty tabs array', () => {
  const tabs: readonly { id: string; label: string; selected: boolean }[] = []
  const virtualDom = getSettingsTabsDom(tabs)

  const expectedDom = [
    {
      childCount: 0,
      className: 'SettingsTabs',
      onClick: DomEventListenerFunctions.HandleClickTab,
      role: AriaRoles.TabList,
      type: VirtualDomElements.Ul,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getSettingsTabsDom handles tabs with special characters', () => {
  const tabs = [
    { id: 'special-tab1', label: 'Tab with & chars', selected: false },
    { id: 'special-tab2', label: 'Tab with < > " \'', selected: true },
  ]
  const virtualDom = getSettingsTabsDom(tabs)

  const expectedDom = [
    {
      childCount: 2,
      className: 'SettingsTabs',
      onClick: DomEventListenerFunctions.HandleClickTab,
      role: AriaRoles.TabList,
      type: VirtualDomElements.Ul,
    },
    {
      ariaSelected: false,
      childCount: 1,
      className: 'Tab',
      id: 'special-tab1',
      name: 'special-tab1',
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
    },
    text('Tab with & chars'),
    {
      ariaSelected: true,
      childCount: 1,
      className: 'Tab TabSelected',
      id: 'special-tab2',
      name: 'special-tab2',
      role: AriaRoles.Tab,
      type: VirtualDomElements.Button,
    },
    text('Tab with < > " \''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})
