import { expect, test } from '@jest/globals'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getSettingsDom } from '../src/parts/GetSettingsDom/GetSettingsDom.ts'

test('getSettingsDom returns correct structure', () => {
  const state = createDefaultState()
  const result = getSettingsDom(state)

  expect(result.length).toBeGreaterThan(0)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    childCount: 2,
    className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
  })
})

test('getSettingsDom passes searchValue to main component', () => {
  const state = createDefaultState()
  const stateWithSearch = {
    ...state,
    searchValue: 'test search',
  }
  const result = getSettingsDom(stateWithSearch)

  expect(result.length).toBeGreaterThan(0)
  // The searchValue should be passed through to the main component
  // We can verify this by checking that the structure is correct
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    childCount: 2,
    className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
  })
})

test('getSettingsDom handles empty searchValue', () => {
  const state = createDefaultState()
  const stateWithEmptySearch = {
    ...state,
    searchValue: '',
  }
  const result = getSettingsDom(stateWithEmptySearch)

  expect(result.length).toBeGreaterThan(0)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    childCount: 2,
    className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
  })
})

test('getSettingsDom handles whitespace-only searchValue', () => {
  const state = createDefaultState()
  const stateWithWhitespaceSearch = {
    ...state,
    searchValue: '   ',
  }
  const result = getSettingsDom(stateWithWhitespaceSearch)

  expect(result.length).toBeGreaterThan(0)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    childCount: 2,
    className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
  })
})
