import { test, expect } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SettingItemOption } from '../src/parts/SettingItem/SettingItem.ts'
import { getOptionDom } from '../src/parts/GetOptionDom/GetOptionDom.ts'

test('getOptionDom returns correct DOM structure for normal option', () => {
  const option: SettingItemOption = {
    id: 'option1',
    label: 'Option 1',
  }

  const result = getOptionDom(option)

  const expectedDom = [
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'option1',
    },
    text('Option 1'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getOptionDom returns correct DOM structure for option with empty label', () => {
  const option: SettingItemOption = {
    id: 'emptyOption',
    label: '',
  }

  const result = getOptionDom(option)

  const expectedDom = [
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'emptyOption',
    },
    text(''),
  ]

  expect(result).toEqual(expectedDom)
})

test('getOptionDom returns correct DOM structure for option with special characters', () => {
  const option: SettingItemOption = {
    id: 'special@#$%',
    label: 'Option with & < > " \' chars',
  }

  const result = getOptionDom(option)

  const expectedDom = [
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'special@#$%',
    },
    text('Option with & < > " \' chars'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getOptionDom returns correct DOM structure for option with numeric id', () => {
  const option: SettingItemOption = {
    id: '123',
    label: 'Numeric Option',
  }

  const result = getOptionDom(option)

  const expectedDom = [
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: '123',
    },
    text('Numeric Option'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getOptionDom returns correct DOM structure for option with long label', () => {
  const option: SettingItemOption = {
    id: 'longOption',
    label: 'This is a very long option label that might wrap to multiple lines in the UI',
  }

  const result = getOptionDom(option)

  const expectedDom = [
    {
      type: VirtualDomElements.Option,
      childCount: 1,
      value: 'longOption',
    },
    text('This is a very long option label that might wrap to multiple lines in the UI'),
  ]

  expect(result).toEqual(expectedDom)
})

test('getOptionDom maintains consistent structure for multiple options', () => {
  const options: SettingItemOption[] = [
    { id: 'option1', label: 'First Option' },
    { id: 'option2', label: 'Second Option' },
    { id: 'option3', label: 'Third Option' },
  ]

  for (const option of options) {
    const result = getOptionDom(option)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({
      type: VirtualDomElements.Option,
      childCount: 1,
      value: option.id,
    })
    expect(result[1]).toEqual(text(option.label))
  }
})
