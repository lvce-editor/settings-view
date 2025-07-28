import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetSettingsInputBadgeDom from '../src/parts/GetSettingsInputBadgeDom/GetSettingsInputBadgeDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingsInputBadgeDom returns correct virtual DOM structure when search value is set', () => {
  const filteredSettingsCount = 5
  const hasSearchValue = true
  const result = GetSettingsInputBadgeDom.getSettingsInputBadgeDom(filteredSettingsCount, hasSearchValue)

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

test('getSettingsInputBadgeDom returns empty array when search value is empty', () => {
  const filteredSettingsCount = 5
  const hasSearchValue = false
  const result = GetSettingsInputBadgeDom.getSettingsInputBadgeDom(filteredSettingsCount, hasSearchValue)

  expect(result).toHaveLength(0)
})

test('getSettingsInputBadgeDom returns empty array when search value is whitespace only', () => {
  const filteredSettingsCount = 5
  const hasSearchValue = false
  const result = GetSettingsInputBadgeDom.getSettingsInputBadgeDom(filteredSettingsCount, hasSearchValue)

  expect(result).toHaveLength(0)
})

test('getSettingsInputBadgeDom with zero count when search value is set', () => {
  const filteredSettingsCount = 0
  const hasSearchValue = true
  const result = GetSettingsInputBadgeDom.getSettingsInputBadgeDom(filteredSettingsCount, hasSearchValue)

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

test('getSettingsInputBadgeDom with large count when search value is set', () => {
  const filteredSettingsCount = 1000
  const hasSearchValue = true
  const result = GetSettingsInputBadgeDom.getSettingsInputBadgeDom(filteredSettingsCount, hasSearchValue)

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
