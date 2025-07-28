import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as GetSettingsInputBadgeDom from '../src/parts/GetSettingsInputBadgeDom/GetSettingsInputBadgeDom.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingsInputBadgeDom returns correct virtual DOM structure', () => {
  const filteredSettingsCount = 5
  const result = GetSettingsInputBadgeDom.getSettingsInputBadgeDom(filteredSettingsCount)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.Badge,
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Text,
    text: SettingStrings.matchingSettings(filteredSettingsCount),
    childCount: 0,
  })
})

test('getSettingsInputBadgeDom with zero count', () => {
  const filteredSettingsCount = 0
  const result = GetSettingsInputBadgeDom.getSettingsInputBadgeDom(filteredSettingsCount)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.Badge,
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Text,
    text: SettingStrings.matchingSettings(filteredSettingsCount),
    childCount: 0,
  })
})

test('getSettingsInputBadgeDom with large count', () => {
  const filteredSettingsCount = 1000
  const result = GetSettingsInputBadgeDom.getSettingsInputBadgeDom(filteredSettingsCount)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.Badge,
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Text,
    text: SettingStrings.matchingSettings(filteredSettingsCount),
    childCount: 0,
  })
})
