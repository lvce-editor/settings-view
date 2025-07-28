import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as GetSettingsNoResultsDom from '../src/parts/GetSettingsNoResultsDom/GetSettingsNoResultsDom.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingsNoResultsDom returns correct virtual DOM structure', () => {
  const searchValue = 'test search'
  const result = GetSettingsNoResultsDom.getSettingsNoResultsDom(searchValue)

  expect(result).toHaveLength(3)

  // Check the div element
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsItems,
    childCount: 1,
  })

  // Check the p element
  expect(result[1]).toEqual({
    type: VirtualDomElements.P,
    className: ClassNames.SettingsNoResults,
    childCount: 1,
  })

  // Check the text content
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsNoResultsDom with empty search value', () => {
  const searchValue = ''
  const result = GetSettingsNoResultsDom.getSettingsNoResultsDom(searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})

test('getSettingsNoResultsDom with special characters', () => {
  const searchValue = 'test & special < > " characters'
  const result = GetSettingsNoResultsDom.getSettingsNoResultsDom(searchValue)

  expect(result).toHaveLength(3)
  expect(result[2]).toEqual(text(SettingStrings.noSettingsMatching(searchValue)))
})
