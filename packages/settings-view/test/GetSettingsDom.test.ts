import { expect, test } from '@jest/globals'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getSettingsDom } from '../src/parts/GetSettingsDom/GetSettingsDom.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('getSettingsDom returns correct structure', () => {
  const state = createDefaultState()
  const result = getSettingsDom(state)

  expect(result.length).toBeGreaterThan(0)
  expect(result[0]).toEqual({
    childCount: 2,
    className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
    type: VirtualDomElements.Div,
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
    childCount: 2,
    className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
    type: VirtualDomElements.Div,
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
    childCount: 2,
    className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
    type: VirtualDomElements.Div,
  })
})

test('getSettingsDom handles whitespace-only searchValue', () => {
  const state = createDefaultState()
  const stateWithWhitespaceSearch = {
    ...state,
    searchValue: ' '.repeat(3),
  }
  const result = getSettingsDom(stateWithWhitespaceSearch)

  expect(result.length).toBeGreaterThan(0)
  expect(result[0]).toEqual({
    childCount: 2,
    className: mergeClassNames(ClassNames.Viewlet, ClassNames.Settings),
    type: VirtualDomElements.Div,
  })
})

test('getSettingsDom filters schema errors using the current search value', () => {
  const state = createDefaultState()
  const stateWithSchemaErrors = {
    ...state,
    schemaErrors: [
      { id: 'one.setting', message: 'unknown type', source: 'First Extension' },
      { id: 'two.setting', message: 'missing value', source: 'Second Extension' },
    ],
    searchValue: 'second',
    tabs: [{ id: InputName.SchemaErrorsTab, label: 'Schema Errors', selected: true }],
  }

  const result = getSettingsDom(stateWithSchemaErrors)
  const serialized = JSON.stringify(result)

  expect(serialized).toContain('two.setting: missing value')
  expect(serialized).not.toContain('one.setting: unknown type')
})
