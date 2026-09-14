import { expect, test } from '@jest/globals'
import { getSchemaErrorsDom } from '../src/parts/GetSchemaErrorsDom/GetSchemaErrorsDom.ts'

test('renders schema error details', () => {
  const dom = getSchemaErrorsDom([
    {
      id: 'example.setting',
      message: 'setting has unknown type invalid',
      source: 'Example Extension',
    },
  ])

  expect(dom).toEqual([
    expect.objectContaining({ childCount: 1, className: 'SettingsSchemaErrors' }),
    expect.objectContaining({ childCount: 2, className: 'SettingsSchemaError', name: 'example.setting' }),
    expect.objectContaining({ text: 'example.setting: setting has unknown type invalid' }),
    expect.objectContaining({ text: 'Source: Example Extension' }),
  ])
})
