import { expect, test } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getSettingsHeaderDom } from '../src/parts/GetSettingsHeaderDom/GetSettingsHeaderDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingsHeaderDom returns correct structure with hasSearchValue true', () => {
  const filteredSettingsCount = 5
  const hasSearchValue = true
  const result = getSettingsHeaderDom(filteredSettingsCount, hasSearchValue)

  expect(result).toHaveLength(7)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsHeader,
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsInputWrapper,
    childCount: 3,
  })
})

test('getSettingsHeaderDom returns correct structure with hasSearchValue false', () => {
  const filteredSettingsCount = 0
  const hasSearchValue = false
  const result = getSettingsHeaderDom(filteredSettingsCount, hasSearchValue)

  expect(result).toHaveLength(5)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsHeader,
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SettingsInputWrapper,
    childCount: 2,
  })
})

test('getSettingsHeaderDom includes badge when hasSearchValue is true', () => {
  const filteredSettingsCount = 3
  const hasSearchValue = true
  const result = getSettingsHeaderDom(filteredSettingsCount, hasSearchValue)

  // The badge should be the second to last element
  const badgeElement = result[result.length - 2]
  expect(badgeElement.type).toBe(VirtualDomElements.Div)
  expect(badgeElement.className).toBe(ClassNames.Badge)

  // The last element should be the badge text
  const badgeText = result[result.length - 1]
  expect(badgeText.type).toBe(VirtualDomElements.Text)
  expect(badgeText.text).toBe(SettingStrings.matchingSettings(filteredSettingsCount))
})

test('getSettingsHeaderDom does not include badge when hasSearchValue is false', () => {
  const filteredSettingsCount = 0
  const hasSearchValue = false
  const result = getSettingsHeaderDom(filteredSettingsCount, hasSearchValue)

  // The last element should be the clear button icon
  const lastElement = result[result.length - 1]
  expect(lastElement.type).toBe(VirtualDomElements.Div)
  expect(lastElement.className).toBe(ClassNames.MaskIcon + ' ' + ClassNames.MaskIconClearAll)
})
