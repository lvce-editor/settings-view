import { expect, test } from '@jest/globals'
import type { DisplaySettingItem } from '../src/parts/DisplaySettingItem/DisplaySettingItem.ts'
import { computeVisibleSections } from '../src/parts/ComputeVisibleSections/ComputeVisibleSections.ts'
import type { SectionHeightMetrics } from '../src/parts/SectionHeightMetrics/SectionHeightMetrics.ts'
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

const items: readonly DisplaySettingItem[] = [
  {
    category: 'text-editor',
    description: 'Description 1',
    errorMessage: '',
    hasError: false,
    heading: 'Heading 1',
    id: 'setting-1',
    modified: false,
    type: SettingItemType.String,
    value: 'abc',
  },
  {
    category: 'text-editor',
    description: 'Description 2',
    errorMessage: '',
    hasError: false,
    heading: 'Heading 2',
    id: 'setting-2',
    modified: false,
    type: SettingItemType.Boolean,
    value: true,
  },
  {
    category: 'text-editor',
    description: 'Description 3',
    errorMessage: '',
    hasError: false,
    heading: 'Heading 3',
    id: 'setting-3',
    modified: false,
    type: SettingItemType.Enum,
    value: 'on',
    options: [{ id: 'on', label: 'On' }],
  },
]

test('computeVisibleSections returns cumulative heights and visible window from top', () => {
  const result = computeVisibleSections(items, 100, 0, metrics)

  expect(result.totalHeight).toBe(219)
  expect(result.visibleSections).toEqual([
    {
      className: 'Section-1',
      height: 75,
      index: 0,
      item: items[0],
      top: 0,
    },
    {
      className: 'Section-2',
      height: 65,
      index: 1,
      item: items[1],
      top: 75,
    },
  ])
  expect(result.topSpacerHeight).toBe(0)
  expect(result.bottomSpacerHeight).toBe(79)
})

test('computeVisibleSections returns intersecting sections for mid-scroll viewports', () => {
  const result = computeVisibleSections(items, 80, 80, metrics)

  expect(result.visibleSections).toEqual([
    {
      className: 'Section-2',
      height: 65,
      index: 1,
      item: items[1],
      top: 75,
    },
    {
      className: 'Section-3',
      height: 79,
      index: 2,
      item: items[2],
      top: 140,
    },
  ])
  expect(result.topSpacerHeight).toBe(75)
  expect(result.bottomSpacerHeight).toBe(0)
})

test('computeVisibleSections returns no sections for empty items', () => {
  const result = computeVisibleSections([], 100, 0, metrics)

  expect(result).toEqual({
    bottomSpacerHeight: 0,
    totalHeight: 0,
    topSpacerHeight: 0,
    visibleSections: [],
  })
})