import { expect, test } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getSettingsTabsDom } from '../src/parts/GetSettingsTabsDom/GetSettingsTabsDom.ts'

test('getSettingsTabsDom returns expected DOM structure for single tab', () => {
  const tabs = [{ id: 'test-tab', label: 'Test Tab', selected: false }]
  const virtualDom = getSettingsTabsDom(tabs)

  const expectedDom = [
    {
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: 1,
      onClick: DomEventListenerFunctions.HandleClickTab,
    },
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'test-tab',
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
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: 3,
      onClick: DomEventListenerFunctions.HandleClickTab,
    },
    {
      type: VirtualDomElements.Li,
      className: 'Tab TabSelected',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'tab1',
    },
    text('Tab 1'),
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'tab2',
    },
    text('Tab 2'),
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'tab3',
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
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: 0,
      onClick: DomEventListenerFunctions.HandleClickTab,
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
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: 2,
      onClick: DomEventListenerFunctions.HandleClickTab,
    },
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'special-tab1',
    },
    text('Tab with & chars'),
    {
      type: VirtualDomElements.Li,
      className: 'Tab TabSelected',
      childCount: 1,
      role: AriaRoles.Tab,
      name: 'special-tab2',
    },
    text('Tab with < > " \''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})
