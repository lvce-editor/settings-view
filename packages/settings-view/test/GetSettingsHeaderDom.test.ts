import { expect, test } from '@jest/globals'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getSettingsHeaderDom } from '../src/parts/GetSettingsHeaderDom/GetSettingsHeaderDom.ts'

test('getSettingsHeaderDom returns correct structure with hasSearchValue true', () => {
  const filteredSettingsCount = 5
  const hasSearchValue = true
  const result = getSettingsHeaderDom(filteredSettingsCount, hasSearchValue)

  expect(result).toHaveLength(9)
  expect(result[0]).toEqual({
    childCount: 1,
    className: ClassNames.SettingsHeader,
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual({
    childCount: 4,
    className: mergeClassNames(ClassNames.SettingsInputWrapper, 'SearchField'),
    type: VirtualDomElements.Div,
  })
})

test('getSettingsHeaderDom returns correct structure with hasSearchValue false', () => {
  const filteredSettingsCount = 0
  const hasSearchValue = false
  const result = getSettingsHeaderDom(filteredSettingsCount, hasSearchValue)

  expect(result).toHaveLength(7)
  expect(result[0]).toEqual({
    childCount: 1,
    className: ClassNames.SettingsHeader,
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual({
    childCount: 3,
    className: mergeClassNames(ClassNames.SettingsInputWrapper, 'SearchField'),
    type: VirtualDomElements.Div,
  })
})

test.todo('getSettingsHeaderDom includes badge when hasSearchValue is true')

test('getSettingsHeaderDom does not include badge when hasSearchValue is false', () => {
  const filteredSettingsCount = 0
  const hasSearchValue = false
  const result = getSettingsHeaderDom(filteredSettingsCount, hasSearchValue)

  // The last element should be the filter button icon
  const lastElement = result.at(-1)
  if (!lastElement) {
    throw new Error('expected filter button icon')
  }
  expect(lastElement.type).toBe(VirtualDomElements.Div)
  expect(lastElement.className).toBe(`${ClassNames.MaskIcon} ${ClassNames.MaskIconFilter}`)
})
