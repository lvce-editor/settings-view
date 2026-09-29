import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getSettingsContentDom } from '../src/parts/GetSettingsContentDom/GetSettingsContentDom.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('getSettingsContentDom counts only rendered children when scrollbar is hidden', () => {
  const result = getSettingsContentDom([], [], '', false)

  expect(result[3]).toMatchObject({
    childCount: 1,
    className: ClassNames.SettingsItemWrapper,
  })
})

test('getSettingsContentDom counts scrollbar when it is shown', () => {
  const result = getSettingsContentDom([], [], '', true)

  expect(result[3]).toMatchObject({
    childCount: 2,
    className: ClassNames.SettingsItemWrapper,
  })
})

test('getSettingsContentDom keeps schema errors inside the item wrapper', () => {
  const tabs = [{ id: InputName.SchemaErrorsTab, label: 'Schema Errors', selected: true }]
  const result = getSettingsContentDom([], tabs, '', false)

  expect(result[3]).toMatchObject({
    childCount: 1,
    className: ClassNames.SettingsItemWrapper,
  })
  expect(result[4]).toMatchObject({
    className: ClassNames.SettingsSchemaErrors,
  })
})
