import { expect, test } from '@jest/globals'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getSettingsTabsDom } from '../src/parts/GetSettingsTabsDom/GetSettingsTabsDom.ts'

test('getSettingsTabsDom returns expected DOM structure for single tab', () => {
  const tabs = ['Test Tab']
  const virtualDom = getSettingsTabsDom(tabs)

  const expectedDom = [
    {
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: 1,
    },
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

test('getSettingsTabsDom returns expected DOM structure for multiple tabs', () => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3']
  const virtualDom = getSettingsTabsDom(tabs)

  const expectedDom = [
    {
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: 3,
    },
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Tab 1'),
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Tab 2'),
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Tab 3'),
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getSettingsTabsDom handles empty tabs array', () => {
  const tabs: readonly string[] = []
  const virtualDom = getSettingsTabsDom(tabs)

  const expectedDom = [
    {
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: 0,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getSettingsTabsDom handles tabs with special characters', () => {
  const tabs = ['Tab with & chars', 'Tab with < > " \'']
  const virtualDom = getSettingsTabsDom(tabs)

  const expectedDom = [
    {
      type: VirtualDomElements.Ul,
      className: 'SettingsTabs',
      role: AriaRoles.TabList,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Tab with & chars'),
    {
      type: VirtualDomElements.Li,
      className: 'Tab',
      childCount: 1,
      role: AriaRoles.Tab,
    },
    text('Tab with < > " \''),
  ]

  expect(virtualDom).toEqual(expectedDom)
})
