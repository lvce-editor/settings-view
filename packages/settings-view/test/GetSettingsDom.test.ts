import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getSettingsDom } from '../src/parts/GetSettingsDom/GetSettingsDom.ts'

test('getSettingsDom returns array of VirtualDomNode objects', () => {
  const mockState: SettingsState = createDefaultState()

  const domNodes = getSettingsDom(mockState)

  expect(Array.isArray(domNodes)).toBe(true)
  expect(domNodes.length).toBe(3)
})

test('getSettingsDom first element is a div with correct properties', () => {
  const mockState: SettingsState = createDefaultState()

  const domNodes = getSettingsDom(mockState)
  const firstNode = domNodes[0]

  expect(firstNode).toHaveProperty('type', VirtualDomElements.Div)
  expect(firstNode).toHaveProperty('childCount', 1)
  expect(firstNode).toHaveProperty('className')
  expect(firstNode.className).toContain(ClassNames.Viewlet)
  expect(firstNode.className).toContain(ClassNames.Settings)
})

test('getSettingsDom second element is an h1 with correct properties', () => {
  const mockState: SettingsState = createDefaultState()

  const domNodes = getSettingsDom(mockState)
  const secondNode = domNodes[1]

  expect(secondNode).toHaveProperty('type', VirtualDomElements.H1)
  expect(secondNode).toHaveProperty('childCount', 1)
})

test('getSettingsDom third element is text with correct content', () => {
  const mockState: SettingsState = createDefaultState()

  const domNodes = getSettingsDom(mockState)
  const thirdNode = domNodes[2]

  expect(thirdNode).toHaveProperty('type', VirtualDomElements.Text)
  expect(thirdNode).toHaveProperty('text', 'Settings Dom: TODO')
  expect(thirdNode).toHaveProperty('childCount', 0)
})

test('getSettingsDom works with different state values', () => {
  const mockState: SettingsState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    breakPointsVisible: false,
    focus: 5,
    id: 999,
    uri: 'different://uri',
    x: 100,
    y: 200,
    width: 1200,
    height: 800,
  }

  const domNodes = getSettingsDom(mockState)

  expect(Array.isArray(domNodes)).toBe(true)
  expect(domNodes.length).toBe(3)

  const firstNode = domNodes[0]
  expect(firstNode).toHaveProperty('type', VirtualDomElements.Div)
  expect(firstNode).toHaveProperty('childCount', 1)
  expect(firstNode).toHaveProperty('className')
})
