import { expect, test } from '@jest/globals'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import type { SectionHeightMetrics } from '../src/parts/SectionHeightMetrics/SectionHeightMetrics.ts'
import { getSectionHeight } from '../src/parts/GetSectionHeight/GetSectionHeight.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'

const metrics: SectionHeightMetrics = {
  checkBoxHeight: 18,
  headingFontSize: 14,
  headingPaddingBottom: 8,
  headingPaddingTop: 12,
  inputBoxHeight: 28,
  labelFontSize: 13,
  selectHeight: 32,
}

const createItem = (type: number, overrides: Partial<DisplaySettingItem> = {}): DisplaySettingItem => {
  return {
    category: 'text-editor',
    description: 'Description',
    errorMessage: '',
    hasError: false,
    heading: 'Heading',
    id: 'setting.id',
    modified: false,
    type,
    value: '',
    ...overrides,
  }
}

test('getSectionHeight returns input-row height for string items', () => {
  const item = createItem(SettingItemType.String)

  const result = getSectionHeight(item, metrics)

  expect(result).toBe(75)
})

test('getSectionHeight returns select-row height for enum items', () => {
  const item = createItem(SettingItemType.Enum)

  const result = getSectionHeight(item, metrics)

  expect(result).toBe(79)
})

test('getSectionHeight returns checkbox-row height for boolean items', () => {
  const item = createItem(SettingItemType.Boolean)

  const result = getSectionHeight(item, metrics)

  expect(result).toBe(65)
})

test('getSectionHeight returns checkbox-row height for color items', () => {
  const item = createItem(SettingItemType.Color)

  const result = getSectionHeight(item, metrics)

  expect(result).toBe(65)
})

test('getSectionHeight adds error-message height when item has an error', () => {
  const item = createItem(SettingItemType.Number, {
    errorMessage: 'Expected a number',
    hasError: true,
  })

  const result = getSectionHeight(item, metrics)

  expect(result).toBe(88)
})

test('getSectionHeight returns heading-only height for unknown items', () => {
  const item = createItem(999)

  const result = getSectionHeight(item, metrics)

  expect(result).toBe(34)
})
