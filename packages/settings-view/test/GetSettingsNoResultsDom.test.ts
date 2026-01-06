import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetSettingsNoResultsDom from '../src/parts/GetSettingsNoResultsDom/GetSettingsNoResultsDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingsNoResultsDom returns correct virtual DOM structure', () => {
  const searchValue = 'test search'
  const result = GetSettingsNoResultsDom.getSettingsNoResultsDom(searchValue)

  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.SettingsItems,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.SettingsNoResults,
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ])
})

test('getSettingsNoResultsDom with empty search value', () => {
  const searchValue = ''
  const result = GetSettingsNoResultsDom.getSettingsNoResultsDom(searchValue)

  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.SettingsItems,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.SettingsNoResults,
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ])
})

test('getSettingsNoResultsDom with special characters', () => {
  const searchValue = 'test & special < > " characters'
  const result = GetSettingsNoResultsDom.getSettingsNoResultsDom(searchValue)

  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.SettingsItems,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.SettingsNoResults,
      type: VirtualDomElements.P,
    },
    text(SettingStrings.noSettingsMatching(searchValue)),
  ])
})
